import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  selector: 'app-intermedio',
  templateUrl: './intermedio.component.html',
  styleUrls: ['./intermedio.component.css']
})
export class IntermedioComponent implements OnInit {

  workspacePlayground: any;

  @ViewChild('codeEditor', { static: true }) codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;

  constructor(private authService: AuthService,
    private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Intermedio - CQL Teacher");
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

  '<category name="Variables">' +
  '<block type="sent_decla"></block>' +
  '<block type="sent_asigna"></block>' +
  '</category>' +

  '<category name="Sentencias Control">' +
  '<block type="sent_if"></block>' +
  '<block type="sent_switch"></block>' +
  '<block type="sent_break"></block>' +
  '</category>' +

  '<category name="Ciclos">' +
  '<block type="sent_while"></block>' +
  '<block type="sent_dowhile"></block>' +
  '<block type="sent_for"></block>' +
  '</category>' +

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

  '<category name="Procedimientos">' +
  '<block type="sent_log"></block>' +
  '<block type="sent_call"></block>' +
  '<block type="sent_call_pro"></block>' +
  '</category>' +

  '</xml>';

  error = '';
  mensaje = '';
 
  errorEditor: ErrorInterface[] = [];
   consolaEditor = '';
   sendEditor = '';
   recEditor = '';
   selects: FileInterface[]=[];
 
   createBlocks() {
     this.workspacePlayground = Blockly.inject('blocklyDiv',
       { toolbox: this.toolbox });
     //return workspacePlayground;
   }
 
   generateCode() {
    var code = Blockly.JavaScript.workspaceToCode(this.workspacePlayground);
    //console.log(code);
    this.codeEditor.setValue(code);
    this.codeEditor.gotoLine(1,0,false);
  }

  onExecute(){
    this.error = '';
    this.mensaje = '';
    let data : string;
    if(this.codeEditor.getSelectedText() == ""){
      data = this.codeEditor.getValue();
    } else {
      data = this.codeEditor.getSelectedText();
    }

    let contenido = "[+QUERY]\n\t[+USER]\n\t\tadmin\n\t[-USER]\n\t[+DATA]" + data + "\n\t[-DATA]\n[-QUERY]";

    this.sendEditor += contenido;

    this.authService.ejecutarQuery(contenido)
    .subscribe( data =>{
      if(data.error == null){
        //console.log(data.toString());

        this.recEditor += data.toString().split("$").join("");

        const ast = parserLUP.parse(data.toString());
        
        if(!isNullOrUndefined(ast)){

          this.consolaEditor = ast.getMensajes();
          this.errorEditor = ast.getErrores();
          this.selects = ast.getData();

        } else {
          this.error = "Error de respuesta del Servidor, inténtelo de nuevo.";
        }
      } else{
          this.error = "Error de conexión, inténtelo de nuevo.";
      }
    },
    error => {
      console.log(error);
      this.error = "Error de conexión, inténtelo de nuevo.";
    });
  }
  deleteSelect(pos: number){
    this.selects.splice(pos,1); 
  }

  generarTabla(val: string, select: FileInterface){
    let id = "select_"+ this.selects.indexOf(select);
    let doc = document.getElementById(id);
    doc.innerHTML = val;
  }

}
