import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { NgxBlocklyConfig, NgxBlocklyGeneratorConfig } from 'ngx-blockly';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import { ErrorInterface } from '../../models/error.interface';
import { FileInterface } from '../../models/file.interface';
import { AuthService } from '../../services/auth/auth.service';
import { isNullOrUndefined } from 'util';
import { Title } from '@angular/platform-browser';

const THEME = 'ace/theme/github';
const LANG = 'ace/mode/java';

declare var Blockly: any;

const parserLUP = require('../../parser/parserLup');

@Component({
  selector: 'app-principiante',
  templateUrl: './principiante.component.html',
  styleUrls: ['./principiante.component.css']
})
export class PrincipianteComponent implements OnInit {

  workspacePlayground: any;

  @ViewChild('codeEditor', { static: true }) codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;

  constructor(private authService: AuthService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Principiante - CQL Teacher");
    this.createBlocks();

    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 26,
      maxLines: 26,
      fontSize: 15
    };

    this.codeEditor = ace.edit(element, editorOptions);
    this.codeEditor.setTheme(THEME);
    this.codeEditor.getSession().setMode(LANG);
    this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
  }

  public toolbox: string = '<xml id="toolbox" style="display: none">' +

    '<category name="Sentencias">' +
    '<block type="use_block"></block>' +
    '<block type="sent_select"></block>' +
    '<block type="sent_insert"></block>' +
    '<block type="sent_delete"></block>' +
    '<block type="sent_update"></block>' +
    '</category>' +

    '<category name="Atributos">' +
    '<block type="all_type"></block>' +
    '<block type="id_type"></block>' +
    //'<block type="math_arithmetic"></block>' +
    '</category>' +

    '<category name="Operadores">' +
    //'<block type="controls_repeat_ext"></block>' +
    '<block type="math_type"></block>' +
    '<block type="relacional_type"></block>' +
    '<block type="logic_type"></block>' +
    '<block type="unario_type"></block>' +
    '</category>' +

    '<category name="Valores">' +
    '<block type="cadena"></block>' +
    '<block type="math_number"></block>' +
    '<block type="boolean_type"></block>' +
    '<block type="date"></block>' +
    '<block type="time"></block>' +
    //'<block type="text_print"></block>' +
    '</category>' +

    '</xml>';

  /*
  public config: NgxBlocklyConfig = {
    toolbox: '<xml id="toolbox" style="display: none">' +
      //'<category name="Sentencias">' +
      '<block type="sent_select"></block>' +
      
      '<block type="controls_repeat_ext"></block>' +
      '<block type="logic_compare"></block>' +
      '<block type="math_number"></block>' +
      '<block type="math_arithmetic"></block>' +
      '<block type="text"></block>' +
      '<block type="text_print"></block>' +
      //'</category>' +
      '</xml>',
    scrollbars: true,
    trashcan: true,
    comments: true
  };

  public generatorConfig: NgxBlocklyGeneratorConfig = {
    dart: true,
    javascript: true,
    lua: true,
    php: true,
    python: true,
  };
  */

  error = '';
  mensaje = '';

  errorEditor: ErrorInterface[] = [];
  consolaEditor = '';
  sendEditor = '';
  recEditor = '';
  selects: FileInterface[] = [];

  createBlocks() {
    this.workspacePlayground = Blockly.inject('blocklyDiv',
      { toolbox: this.toolbox });
    //return workspacePlayground;
  }

  generateCode() {
    var code = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);
    //console.log(code);
    this.codeEditor.setValue(code);
    this.codeEditor.gotoLine(1, 0, false);
  }

  onExecute() {
    this.error = '';
    this.mensaje = '';
    let data: string;
    if (this.codeEditor.getSelectedText() == "") {
      data = this.codeEditor.getValue();
    } else {
      data = this.codeEditor.getSelectedText();
    }

    let contenido = "[+QUERY]\n\t[+USER]\n\t\tadmin\n\t[-USER]\n\t[+DATA]" + data + "\n\t[-DATA]\n[-QUERY]";

    this.sendEditor += contenido;

    this.authService.ejecutarQuery(contenido)
      .subscribe(data => {
        if (data.error == null) {
          //console.log(data.toString());

          this.recEditor += data.toString().split("$").join("");

          const ast = parserLUP.parse(data.toString());

          if (!isNullOrUndefined(ast)) {

            this.consolaEditor = ast.getMensajes();
            this.errorEditor = ast.getErrores();
            this.selects = ast.getData();

          } else {
            this.error = "Error de respuesta del Servidor, inténtelo de nuevo.";
          }
        } else {
          this.error = "Error de conexión, inténtelo de nuevo.";
        }
      },
        error => {
          console.log(error);
          this.error = "Error de conexión, inténtelo de nuevo.";
        });
  }
  deleteSelect(pos: number) {
    this.selects.splice(pos, 1);
  }

  generarTabla(val: string, select: FileInterface) {
    let id = "select_" + this.selects.indexOf(select);
    let doc = document.getElementById(id);
    doc.innerHTML = val;
  }
}
