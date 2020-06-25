import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Cdb{


public nome:String;
public valor_taxa:Number;
public vencimento:Date;
public data_compra:Date;

/*Modo feito com Async Await */
public static async todosCdb(http:HttpClient){
    return await http.get<Cdb[]>(`${environment.apiCDB}/cdb.json`,{ headers: new HttpHeaders({'token':environment.token})}).toPromise();
}

}