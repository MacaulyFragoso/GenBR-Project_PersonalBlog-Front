import { ThemeModel } from './../model/ThemeModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  themeModel: ThemeModel = new ThemeModel();
  listaTemas: ThemeModel[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){

    if (environment.token == ""){
      alert("A sua sessão expirou, faça login novamente.");
      this.router.navigate(['/entrar']);
    }

    this.findAllTemas();

  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: ThemeModel[]) => {
      this.listaTemas = resp;
    })
  }

  cadastrar(){
    this.temaService.postTema(this.themeModel).subscribe((resp: ThemeModel) => {
      this.themeModel = resp;
      alert("Tema cadastrado com sucesso!");
      this.findAllTemas();
      this.themeModel = new ThemeModel();
    } );

  }

}
