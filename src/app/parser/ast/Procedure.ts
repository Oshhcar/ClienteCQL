import { Struc } from './Struc';
import { NodeInterface } from '../../models/node.interface';
import { isNullOrUndefined } from 'util';

export class Procedure implements Struc{

    constructor(public nombre: string, 
        public linea: number, public columna:number){

    }

    getStruc(): NodeInterface {
        return {name:this.nombre.split('$').join('')+" (procedure)"};
    }    
    
    getLinea(): number {
        return this.linea;
    }

    getColumna(): number {
        return this.columna;
    }

    
}