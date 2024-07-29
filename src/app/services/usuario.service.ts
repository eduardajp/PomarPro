<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }


  public addUsuario(info:any):Observable<any>{
    return this.http.post(
      'http://localhost:3000/usuario/add',
      {info},
      {observe:'response'}

    )
  }

}
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }


  public addUsuario(info:any):Observable<any>{
    return this.http.post(
      'http://localhost/usuario/add',
      info,
      {observe:'response'}

    )
  }

}
>>>>>>> 31e1ea3575f931228b958ed3138bb65a28294a19
