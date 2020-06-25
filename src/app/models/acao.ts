import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class Acao{
    public nome_empresa:String; 
    public cod_empresa:String;
    public taxa_juros:Number;
    public tipo:String

    constructor(private http:HttpClient){


    }
/* Modo feito com Callback
    static getAcao(callback,http):void{
        let acoes:Acao[];
        http.get(`${environment.apiAcoes}/acoes.json`,
        { headers: new HttpHeaders({'token':environment.token})}).subscribe((acao: Acao[])=>{
            callback.call(null,acao);
        },(error:HttpErrorResponse)=> {
            callback.call(null,null);
        }) 
    }
*/

/*Modo feito com Async Await */
    public static async todos(http:HttpClient){
        return await http.get<Acao[]>(`${environment.apiAcoes}/acoes.json`,{ headers: new HttpHeaders({'token':environment.token})}).toPromise();
    }

}