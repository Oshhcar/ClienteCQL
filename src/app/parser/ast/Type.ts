import { Struc } from './Struc';
import { NodeInterface } from '../../models/node.interface';
import { isNullOrUndefined } from 'util';
import { Column } from './Column';

export class Type implements Struc{

    constructor(public nombre: string, public nodos: any[], 
        public linea: number, public columna:number){

    }

    getStruc(): NodeInterface {
        if(isNullOrUndefined(this.nodos)){
            return {name:this.nombre.split('$').join('')+" (type)"};
        } else{
            let lista: NodeInterface[] = [];

            for (let i = 0; i < this.nodos.length; i++) {
                let nodo = this.nodos[i];
                if (nodo instanceof Column) {
                    lista.push(nodo.getStruc());
                }
            }
            return { name:this.nombre.split('$').join('')+" (type)", children: lista };
        }
    }    
    
    getLinea(): number {
        return this.linea;
    }

    getColumna(): number {
        return this.columna;
    }

    
}