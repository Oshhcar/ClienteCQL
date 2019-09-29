import { Component, ViewChild, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { EditorComponent } from '../editor/editor.component';

import { FileInterface} from '../../models/file.interface';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-avanzado',
  templateUrl: './avanzado.component.html',
  styleUrls: ['./avanzado.component.css']
})
export class AvanzadoComponent implements OnInit {

  constructor(private titleService: Title) { }

  nuevo: FileInterface;

  file1: FileInterface = {
    name: 'archivo1',
    content: ''
  }

  file2: FileInterface = {
    name: 'archivo2',
    content: ''
  }

  contador: number=3;

  files: FileInterface[]=[];

  SelectedFiles : FileList;

  ngOnInit() {
    this.titleService.setTitle("Avanzado - CQL Teacher");

    this.files.push(this.file1);
    this.files.push(this.file2);
  }

  addFile(){
    this.nuevo = {
      name: 'archivo'+this.contador++,
      content: ''
    }
    this.files.push(this.nuevo);
  }

  onSelectFile(files: FileList){
    this.SelectedFiles = files;
  }

  openFile(){
    if(!isNullOrUndefined(this.SelectedFiles)){
      if(this.SelectedFiles.length>0){
        let file: File = this.SelectedFiles[0];
        let reader = new FileReader();

        let self = this;
        reader.onloadend = function (x) {
          //self.fileContent = reader.result;
          self.nuevaPestaña(file.name, reader.result);
        }
        reader.readAsText(file);
      }
    }
  }

  nuevaPestaña(name: string, content: any){
    this.files.push({name:name, content: content});
    //console.log(content);
  }

  deleteFile(pos: number){
    this.files.splice(pos,1); 
  }

}
