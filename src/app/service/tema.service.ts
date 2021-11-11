import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemeModel } from '../model/ThemeModel';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas(): Observable<ThemeModel[]>{
    return this.http.get<ThemeModel[]>("http://localhost:8080/tema", this.token);

  }

  postTema(tema: ThemeModel): Observable<ThemeModel>{
    return this.http.post<ThemeModel>("http://localhost:8080/tema", tema, this.token);
  }

}
