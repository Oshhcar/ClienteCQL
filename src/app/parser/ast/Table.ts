import { Struc } from './Struc';
import { NodeInterface } from '../../models/node.interface';
import { isNullOrUndefined } from 'util';
import { Columns } from './Columns';

export class Table implements Struc{

    constructor(public nombre: string, public nodos: any[], 
        public linea: number, public columna:number){

    }

    getStruc(): NodeInterface {
        if(isNullOrUndefined(this.nodos)){
            return {name:this.nombre.split('$').join('')+" (tabla)"};
        } else{
            let lista: NodeInterface[] = [];

            for (let i = 0; i < this.nodos.length; i++) {
                let nodo = this.nodos[i];
                if (nodo instanceof Columns) {
                    let struc = nodo.getStruc();
                    if(!isNullOrUndefined(struc))
                    {
                        if(!isNullOrUndefined(struc.children)){
                            for(let j=0; j<struc.children.length; j++){
                                lista.push(struc.children[j]);
                            }
                        }
                    }
                }
            }
            return { name:this.nombre.split('$').join('')+" (tabla)", children: lista };
        }
    }    
    
    getLinea(): number {
        return this.linea;
    }

    getColumna(): number {
        return this.columna;
    }

    
}