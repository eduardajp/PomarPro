import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArvoreService {

 

  constructor(private http:HttpClient) { }
  public addarvore(info:any):Observable<any>{
    return this.http.post("http://localhost:3000/arvore/add",
    {info},
    {observe:'response'})
  }

  public getarvore():Observable<any>{
    return this.http.get('http://localhost:3000/arvore/buscaTodos',
    {observe:'response'})
  }

}
