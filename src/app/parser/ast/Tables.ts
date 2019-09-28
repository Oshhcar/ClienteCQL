import { Struc } from './Struc';
import { Table } from './Table';
import { NodeInterface } from '../../models/node.interface';
import { isNullOrUndefined } from 'util';

export class Tables implements Struc {

    constructor(public nodos: any[], public linea: number, public columna: number) {

    }

    getStruc(): NodeInterface {
        if (!isNullOrUndefined(this.nodos)) {

            let lista: NodeInterface[] = [];

            for (let i = 0; i < this.nodos.length; i++) {
                let nodo = this.nodos[i];
                if (nodo instanceof Table) {
                    lista.push(nodo.getStruc());
                }
            }

            if(lista.length > 0){
                return { name: "Tablas", children: lista };
            }
            else {
                return null;
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