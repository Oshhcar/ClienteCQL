import { NodoAST } from './NodoAST';
import { isNullOrUndefined } from 'util';

export class Data implements NodoAST{

    constructor(private valor : string, private linea: number, private columna: number){}

    getData(): string{
        if(!isNullOrUndefined(this.valor))
            return this.valor.split('$').join('');
        return null;
    }

    getLinea(): number {
        return this.linea;
    }    
    
    getColumna(): number {
        return this.columna;
    }


}