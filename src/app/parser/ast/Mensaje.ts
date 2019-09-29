import { NodoAST } from './NodoAST';

export class Mensaje implements NodoAST{

    constructor(private valor : string, private linea: number, private columna: number){}

    getValor(): string{
        return this.valor.split('$').join('');
    }

    getLinea(): number {
        return this.linea;
    }    
    
    getColumna(): number {
        return this.columna;
    }


}