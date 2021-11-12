
import { ThemeModel } from './../model/ThemeModel';
import { TemaService } from 'src/app/service/tema.service';
import { PostModel } from './../model/PostModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostagemService } from '../service/postagem.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  PostModel: PostModel = new PostModel();
  listaPostagens: PostModel[];

  themeModel: ThemeModel = new ThemeModel();
  listaTemas: ThemeModel[];
  idTema: number;

  UserLoginModel: UserLoginModel = new UserLoginModel();
  idUser: environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService

  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if (environment.token == ""){
      alert("A sua sessão expirou, faça login novamente.");
      this.router.navigate(['/entrar']);
    }

    this.getAllTemas();
    this.getAllPostagens();

  }

  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: ThemeModel[]) => {
      this.listaTemas = resp;
    })
  }

    findByITema(){
      this.temaService.getByIdTema(this.idTema).subscribe((resp: ThemeModel) => {
        this.themeModel = resp;
    })

  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: PostModel[]) => {
      this.listaPostagens = resp;
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.UserModel = resp;

  }

    publicar(){
      this.tema.id = this.idTema;
      this.PostModel.tema = this.themeModel;

      this.usuario.id = this.idUser;
      this.PostModel.usuario = this.userModel;

      this.postagemService.postPostagem(this.PostModel).subscribe((resp: PostModel) => {
        this.PostModel = resp;
        alert("Postagem realizada com sucesso!");
        this.PostModel = new PostModel();
        this.getAllPostagens();
      })

    }

}
