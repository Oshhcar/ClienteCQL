import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import { AuthService } from '../../services/auth/auth.service';
import { FileInterface } from '../../models/file.interface';
import { isNullOrUndefined } from 'util';
import { ErrorInterface } from '../../models/error.interface';

const THEME = 'ace/theme/github';
const LANG = 'ace/mode/java';

const parserLUP = require('../../parser/parserLup');

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input('file') file: FileInterface;

  @ViewChild('codeEditor', {static: true}) codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;

  constructor(private authService: AuthService) { }

  error = '';
  mensaje = '';

  errorEditor: ErrorInterface[] = [];
  consolaEditor = '';
  sendEditor = '';
  recEditor = '';
  selects: FileInterface[]=[];

  ngOnInit() {

    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 25,
      maxLines: 25,
      fontSize: 15
    };

    this.codeEditor = ace.edit(element, editorOptions);
    this.codeEditor.setTheme(THEME);
    this.codeEditor.getSession().setMode(LANG);
    this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
    this.codeEditor.setValue(this.file.content);
    this.codeEditor.gotoLine(1,1,false);
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

  onGuardar(){
    //console.log(this.codeEditor.getValue());
    var blob = new Blob([this.codeEditor.getValue()], { type : 'text/plain'});
    var url = window.URL.createObjectURL(blob);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', url);
    linkElement.setAttribute("download", this.file.name);

    var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });

    linkElement.dispatchEvent(clickEvent);
  }

  deleteSelect(pos: number){
    this.selects.splice(pos,1); 
  }

  generarTabla(val: string, filename: string, select: FileInterface){
    let id = filename + "select_"+ this.selects.indexOf(select);
    let doc = document.getElementById(id);
    doc.innerHTML = val;
  }
}
