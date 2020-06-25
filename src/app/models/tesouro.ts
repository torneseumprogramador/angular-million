import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Tesouro{

    constructor(private http:HttpClient){}

    public nome: String;
    public taxa: Number;
    public ir: Boolean;
    public pais: String;
    public prefixado: Boolean;
    public vencimento: Date;


/*Modo feito com Async Await */
public static async todosTesouro(http:HttpClient){
    return await http.get<Tesouro[]>(`${environment.apiTesouro}/tesouro`,{ headers: new HttpHeaders({'token':environment.token})}).toPromise();
}


}