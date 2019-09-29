import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NodeInterface } from '../../models/node.interface';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { AuthService } from 'src/app/services/auth/auth.service';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  private _transformer = (node: NodeInterface, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router, private authService: AuthService) { 
    this.dataSource.data = this.authService.getStruc(); }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
    this.menuBD = true;
  }

  toggled2: boolean;
  menuBD: boolean;

  onMenuBD(): void {
    let bd = document.getElementById('bd');
    let bdItem = document.getElementById('bdItem');

    if(this.menuBD){
      bd.className = 'nav-item dropdown';
      bdItem.className = 'dropdown-menu';
      this.menuBD = false;
    } else{
      bd.className = 'nav-item dropdown active show';
      bdItem.className = 'dropdown-menu show';
      this.menuBD = true;
    }

  }

  sidebarCollapse2(): void{
    if(this.toggled2){
      let element = document.getElementById('wrapper');
      element.className = '';
      let clase = document.body.className.replace(" sidebar2","");
      document.body.className = clase.toString();
      let bd = document.getElementById('bd');
      bd.className = 'nav-item dropdown active show';
      let bdItem = document.getElementById('bdItem');
      bdItem.className = 'dropdown-menu scrollable-menu  show';
      this.toggled2 = false;
    } else {
      let element = document.getElementById('wrapper');
      element.className = 'toggled2';
      let clase = document.body.className.concat(" sidebar2");
      document.body.className = clase.toString();
      let bd = document.getElementById('bd');
      bd.className = 'nav-item dropdown';
      let bdItem = document.getElementById('bdItem');
      bdItem.className = 'dropdown-menu scrollable-menu';
      this.toggled2 = true;
    }
    
  }
}
