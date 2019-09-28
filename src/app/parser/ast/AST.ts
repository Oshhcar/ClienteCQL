import { Login } from './Login';
import { Logout } from './Logout';
import { NodeInterface } from '../../models/node.interface';
import { Databases } from './Databases';

export class AST {
    constructor(public nodos: any[]){
        this.nodos = nodos;
    }

    public ejecutar():object{

        return null;
    }

    public getLogin():boolean{
        
        for(let i = 0; i < this.nodos.length; i++){
            let nodo = this.nodos[i];
            
            if(nodo instanceof Login){
                return nodo.getValor();
            }
        }

        return false;
    }

    public getLogout():boolean{

        for(let i = 0; i < this.nodos.length; i++){
            let nodo = this.nodos[i];
            
            if(nodo instanceof Logout){
                return nodo.getValor();
            }
        }

        return false;
    }

    public getStruc(): NodeInterface{

        for(let i = 0; i < this.nodos.length; i++){
            let nodo = this.nodos[i];
            
            if(nodo instanceof Databases){
                return nodo.getStruc();
            }
        }

        return null;
    }
}