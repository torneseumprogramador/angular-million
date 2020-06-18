import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class Acao{
    public nome_empresa:String; 
    public cod_empresa:String;
    public taxa_juros:Number;
    public tipo:String

    constructor(private http:HttpClient){


    }

    static getAcao(callback,http):void{

        let acoes:Acao[];

        http.get(`${environment.apiacoes}/acoes.json`,
        { headers: new HttpHeaders({'token':'123456'})}).subscribe((acao: Acao[])=>{
            callback.call(null,acao);

        },(error:HttpErrorResponse)=> {
            
            callback.call(null,null);

        }) 

    }
    
}