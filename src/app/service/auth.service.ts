import { environment } from './../../environments/environment.prod';
import { UserLoginModel } from './../model/UserLoginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLoginModel: UserLoginModel): Observable<UserLoginModel>{
    return this.http.post<UserLoginModel>('http://localhost:8080/usuario/logar', userLoginModel)
  }

  cadastrar(userModel: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('http://localhost:8080/usuario/cadastrar', userModel)
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }

  }
