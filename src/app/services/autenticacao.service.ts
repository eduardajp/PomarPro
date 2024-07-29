<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http:HttpClient) { }

  //Autenticar
  public autenticaUsuario(usuario:string,senha:string):Observable<any>{
    return this.http.post('http://localhost:3000/usuario/autenticar',{usuario,senha},{observe:'response'})
  }



}
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http:HttpClient) { }

  //Autenticar
  public autenticaUsuario(usuario:string,senha:string):Observable<any>{
    return this.http.post('http://localhost:3000/usuario/autenticar',{usuario,senha},{observe:'response'})
  }



}
>>>>>>> 31e1ea3575f931228b958ed3138bb65a28294a19
