
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Produit} from "../models/produit.model";
@Injectable()
export class ProduitService {
  host="http://localhost:8080";
  constructor(private httpClient:HttpClient){}

getProduit(mcle:string ,page:number, size:number){
 return this.httpClient.get<any>("http://localhost:8080/produits/search/page?mc="+mcle+"&page="+page+"&size="+size);
}
deleteProduit(url){
 return this.httpClient.delete(url);
}
saveProduct(url,data){
return this.httpClient.post(this.host+"/produits",data);
}
getProduct(url){
    return this.httpClient.get<any>(url);
}
updateProduct(url,data){
    return this.httpClient.put(url,data);

}
}
