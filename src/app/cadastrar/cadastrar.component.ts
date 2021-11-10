import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  userModel: UserModel = new UserModel();
  confirmaSenha: string;
  tipoUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {

    window.scrollTo(0,0);

  }

  confirmarSenha(event: any) {
    this.confirmaSenha = event.target.value;

  }

  tipoUsuario(event: any) {
    this.tipoUser = event.target.value;
  }

  cadastrar(){
    this.userModel.tipo = this.tipoUser;

    if(this.userModel.senha != this.confirmaSenha){
      alert("Senhas não conferem");

    }else{
      this.authService.cadastrar(this.userModel).subscribe((resp: UserModel) => {
        this.userModel = resp;
        this.router.navigate(['/entrar']);
          alert("Cadastro realizado com sucesso!");
    })

  }

  }

}
