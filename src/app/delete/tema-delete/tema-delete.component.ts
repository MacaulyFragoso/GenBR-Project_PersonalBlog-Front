import { environment } from './../../../environments/environment.prod';
import { ThemeModel } from './../../model/ThemeModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemaService } from './../../service/tema.service';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

themeModel: ThemeModel = new ThemeModel();
idTema: number;

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar']);
    }

    this.idTema = this.route.snapshot.params['id'];
    this.findByIdTema(this.idTema)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: ThemeModel) => {
      this.themeModel = resp;
    })
  }

  apagar(){
    this.temaService.deleteTema(this.idTema).subscribe(() => {
      alert('Tema Apagado com sucesso!');
      this.router.navigate(['/tema']);
    })
  }

}
