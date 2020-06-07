import { Cliente } from '../models/cliente';

export class Sessao{

    public static setCliente(cliente:Cliente):void {
        localStorage.setItem("cliente",JSON.stringify(cliente))
    }

    public static getCliente():Cliente{
        
        if(!localStorage.getItem("cliente")){
            return null
        }
        let cli:Cliente
        JSON.parse(localStorage.getItem("cliente"))
        return cli
    }

    public static removeCliente():void {
        localStorage.removeItem("cliente");
        

    }
}