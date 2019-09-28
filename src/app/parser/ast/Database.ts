import { Struc } from './Struc';
import { NodeInterface } from '../../models/node.interface';
import { isNullOrUndefined } from 'util';
import { Tables } from './Tables';
import { Types } from './Types';
import { Procedures } from './Procedures';

export class Database implements Struc{

    constructor(public nombre: string, public nodos: any[], 
        public linea: number, public columna:number){

    }


    getStruc(): NodeInterface {
        if(isNullOrUndefined(this.nodos)){
            return {name:this.nombre.split('$').join('')};
        } else{
            let lista: NodeInterface[] = [];

            for (let i = 0; i < this.nodos.length; i++) {
                let nodo = this.nodos[i];
                if (nodo instanceof Tables || nodo instanceof Types || nodo instanceof Procedures) {

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
            return { name:this.nombre.split('$').join(''), children: lista };
        }
    }    
    
    getLinea(): number {
        return this.linea;
    }

    getColumna(): number {
        return this.columna;
    }

    
}