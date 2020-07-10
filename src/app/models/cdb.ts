import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Cdb{

    public _id:Number;
    public nome:String;
    public valor_taxa:Number;
    public vencimento:Date;
    public data_compra:Date;

    /*Modo feito com Async Await */
    public static async todosCdb(http:HttpClient){
      return await http.get<Cdb[]>(`${environment.apiCDB}/cdb.json`,{ headers: new HttpHeaders({'token':environment.token})}).toPromise();
    }

    public async salvar(http:HttpClient){
      if(!this._id){
        return await http.post<Cdb>(`${environment.apiCDB}/cdb.json`, this,{ headers: new HttpHeaders({'token':environment.token})}).toPromise();
      }else{
        return await http.put<Cdb>(`${environment.apiCDB}/cdb/${this._id}.json`, this,{ headers: new HttpHeaders({'token':environment.token})}).toPromise();
      }
    }

    public async excluir(http:HttpClient){
      return await http.delete<Cdb>(`${environment.apiCDB}/cdb/${this._id}.json`,{ headers: new HttpHeaders({'token':environment.token})}).toPromise();
    }

}
