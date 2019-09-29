import { Login } from './Login';
import { Logout } from './Logout';
import { NodeInterface } from '../../models/node.interface';
import { Databases } from './Databases';
import { Mensaje } from './Mensaje';
import { ErrorInterface } from '../../models/error.interface';
import { Error } from './Error';
import { isNullOrUndefined } from 'util';
import { FileInterface } from '../../models/file.interface';
import { Data } from './Data';

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

    public getMensajes(): string{
        let mensaje = '';

        for(let i = 0; i < this.nodos.length; i++){
            let nodo = this.nodos[i];
            
            if(nodo instanceof Mensaje){
                mensaje += nodo.getValor()+"\n";
            }
        }

        return mensaje;
    }

    public getErrores(): ErrorInterface []{
        let errores = [];

        let cont = 1;

        for(let i = 0; i < this.nodos.length; i++){
            let nodo = this.nodos[i];
            
            if(nodo instanceof Error){
                let e = nodo.getError();
                if(!isNullOrUndefined(e)){
                    e.numero = cont++;
                    errores.push(e);
                }
            }
        }

        return errores;
    }

    public getData(): FileInterface[]{
        let data = [];

        let cont = 1;

        for(let i = 0; i < this.nodos.length; i++){
            let nodo = this.nodos[i];
            
            if(nodo instanceof Data){
                let dat = nodo.getData();

                if(!isNullOrUndefined(dat)){
                    let select : FileInterface = {
                        name: "Select"+cont++,
                        content: dat
                    }
                    data.push(select);
                }
            }
        }
        return data;
    }

}