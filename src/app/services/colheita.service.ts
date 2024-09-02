import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColheitaService {

 

  constructor(private http:HttpClient) { }
  public addcolheita(info:any):Observable<any>{
    return this.http.post("http://localhost:3000/colheita/add",
    {info},
    {observe:'response'})
  }

  public getcolheita():Observable<any>{
    return this.http.get('http://localhost:3000/colheita/buscaTodos',
    {observe:'response'})
  }

}
