import { PostModel } from './../model/PostModel';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<PostModel[]>{
    return this.http.get<PostModel[]>('http://localhost:8080/postagens', this.token)
  }

  getByIdPostModel(id: number): Observable<PostModel>{
    return this.http.get<PostModel>(`http://localhost:8080/postagens/${id}`, this.token)
  }

  postPostagem(postModel: PostModel): Observable<PostModel>{
    return this.http.post<PostModel>('http://localhost:8080/postagens', this.token)
  }

  putPostagem(postModel: PostModel): Observable<PostModel>{
    return this.http.put<PostModel>('http://localhost:8080/postagens', postModel, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token)
  }

}
