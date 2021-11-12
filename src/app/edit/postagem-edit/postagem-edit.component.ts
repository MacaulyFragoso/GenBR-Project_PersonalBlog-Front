import { ThemeModel } from './../../model/ThemeModel';
import { environment } from './../../../environments/environment.prod';
import { PostModel } from './../../model/PostModel';
import { Component, OnInit } from '@angular/core';
import { PostagemService } from 'src/app/service/postagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postModel: PostModel = new PostModel();
  themeModel: ThemeModel = new ThemeModel();
  listaTemas: ThemeModel[];
  idTema: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit(){

    window.scroll(0,0);

    if(environment.token == ''){
      this.router.navigate(['/entrar']);
    }

    let id = this.route.snapshot.params['id'];
    this.findByIdPostModel(id);
    this.findAllTemas();

  }

  findByIdPostModel(id: number){
    this.postagemService.getByIdPostModel(id).subscribe((resp: PostModel) => {
      this.postModel = resp;

    })

  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: ThemeModel) => {
      this.themeModel = resp;
    })
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: ThemeModel[]) => {
      this.listaTemas = resp;
    })
  }

  atualizar(){
    this.themeModel.id = this.idTema;
    this.postModel.tema = this.themeModel;
    this.postagemService.putPostagem(this.postModel).subscribe((resp: PostModel) => {
      this.postModel = resp;
      alert('Postagem atualizada com sucesso!');
      this.router.navigate(['/inicio']);
  })

}
