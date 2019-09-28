import {NodoAST} from './NodoAST';
import { NodeInterface } from '../../models/node.interface'

export interface Struc extends NodoAST{
    getStruc():  NodeInterface;
}