import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class produtoService {

 

  constructor(private http:HttpClient) { }
  public addproduto(info:any):Observable<any>{
    return this.http.post("http://localhost:3000/produto/add",
    {info},
    {observe:'response'})
  }

  public getproduto():Observable<any>{
    return this.http.get('http://localhost:3000/produto/buscaTodos',
    {observe:'response'})
  }

}
