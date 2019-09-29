import { NodoAST } from './NodoAST';
import { isNullOrUndefined } from 'util';
import { ErrorInterface } from '../../models/error.interface';
import { Atributo } from './Atributo';

export class Error implements NodoAST{

    constructor(private nodos : any[], private linea: number, private columna: number){}

    getError(): ErrorInterface {
        if(!isNullOrUndefined(this.nodos)){
            let error: ErrorInterface = {};

            for(let i = 0; i < this.nodos.length; i++){
                let nodo = this.nodos[i];
                
                if(nodo instanceof Atributo){
                    if(nodo.nombre == "line"){
                        error.linea = nodo.valor.split('$').join('');
                    } else if(nodo.nombre == "column") {
                        error.columna = nodo.valor.split('$').join('');
                    } else if(nodo.nombre == "type") {
                        error.valor = nodo.valor.split('$').join('');
                    } else if(nodo.nombre == "desc") {
                        error.descripcion = nodo.valor.split('$').join('');
                    }
                }
            }

            return error;
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