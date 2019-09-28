import { Struc } from './Struc';
import { NodeInterface } from '../../models/node.interface';
import { isNull, isNullOrUndefined } from 'util';
import { Atributo } from './Atributo';

export class Column implements Struc{

    constructor(public nodos: any[], 
        public linea: number, public columna:number){

    }

    getStruc(): NodeInterface {
        //return {name:this.nombre.split('$').join('')};
        let nombre;

        if(isNullOrUndefined(this.nodos)){
            return null;
        } else {
            let lista : NodeInterface[] = [];

            for (let i = 0; i < this.nodos.length; i++) {
                let nodo = this.nodos[i];
                if (nodo instanceof Atributo) {
                    if(nodo.nombre == "name"){
                        nombre = nodo.valor.split('$').join("");
                    } else {
                        lista.push({name:nodo.nombre+":"+nodo.valor.split('$').join("")});
                    }
                }
            }

            if(!isNullOrUndefined(nombre)){
                return {name:nombre, children:lista};
            }
        }
        return null;
    }    
    
    getLinea(): number {
        return this.linea;
    }

    getColumna(): number {
        return this.columna;
    }

    
}