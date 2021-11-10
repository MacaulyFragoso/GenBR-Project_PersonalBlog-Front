import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserLoginModel } from './../model/UserLoginModel';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLoginModel: UserLoginModel = new UserLoginModel();

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  ngOnInit(){
    window.scrollTo(0, 0);
  }

  entrar() {
    this.auth.entrar(this.userLoginModel).subscribe((resp: UserLoginModel)=>{
      this.userLoginModel = resp;

      environment.token = this.userLoginModel.token
      environment.nome = this.userLoginModel.nome
      environment.foto = this.userLoginModel.foto
      environment.id = this.userLoginModel.id

      // console.log()

      this.router.navigate(['/inicio']);
    }, erro =>{
      if(erro.status == 500){
        alert("Usuário ou Senha estão incorretos!")
      }
    });

  }

}
