import { Struc } from './Struc';
import { Database } from './Database';
import { NodeInterface } from '../../models/node.interface';
import { isNullOrUndefined } from 'util';

export class Databases implements Struc {

    constructor(public nodos: any[], public linea: number, public columna: number) {

    }

    getStruc(): NodeInterface {
        if (!isNullOrUndefined(this.nodos)) {

            let lista: NodeInterface[] = [];

            for (let i = 0; i < this.nodos.length; i++) {
                let nodo = this.nodos[i];
                if (nodo instanceof Database) {
                    lista.push(nodo.getStruc());
                }
            }
            return { name: "BasesdeDatos", children: lista };
        }
        return {name: "Empty"};
    }

    getLinea(): number {
        return this.linea;
    }

    getColumna(): number {
        return this.columna;
    }


}