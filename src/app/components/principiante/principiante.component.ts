import { Component, OnInit } from '@angular/core';
import { NgxBlocklyConfig, NgxBlocklyGeneratorConfig } from 'ngx-blockly';

@Component({
  selector: 'app-principiante',
  templateUrl: './principiante.component.html',
  styleUrls: ['./principiante.component.css']
})
export class PrincipianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  onCode(code: string) {
    console.log(code);
  }
}
