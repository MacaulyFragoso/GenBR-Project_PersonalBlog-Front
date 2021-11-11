import { environment } from './../../../environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeModel } from './../../model/ThemeModel';
import { Component, OnInit } from '@angular/core';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  themeModel: ThemeModel = new ThemeModel();

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      this.router.navigate(['/entrar']);
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: ThemeModel) => {
      this.themeModel = resp;
  })

}

atualizar(){
  this.temaService.putTema(this.themeModel).subscribe((resp: ThemeModel) => {
    this.themeModel = resp;
    alert("Tema atualizado com sucesso!");
    this.router.navigate(['/tema']);
  })
}

}
