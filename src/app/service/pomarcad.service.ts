import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PomarcadService {

  constructor(private http:HttpClient) { }
  
  
  public addPomar(info:any):Observable<any>{
    return this.http.post(
      'http://localhost:3000/pomarcad/add',
      {info},
      {observe:'response'}
  
    )
  
}
public getPomar():Observable<any>{
  return this.http.get(
    'http://localhost:3000/pomarcad/buscaTodos',
    {observe:'response'}
  )
}
}