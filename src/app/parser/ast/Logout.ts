import { NodoAST } from './NodoAST';

export class Logout implements NodoAST{

    constructor(private valor : boolean, private linea: number, private columna: number){}

    getValor(): boolean{
        return this.valor;
    }

    getLinea(): number {
        return this.linea;
    }    
    
    getColumna(): number {
        return this.columna;
    }


}