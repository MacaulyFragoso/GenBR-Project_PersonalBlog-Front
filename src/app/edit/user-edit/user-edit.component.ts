import { UserModel } from './../../model/UserModel';
import { AuthService } from './../../service/auth.service';
import { UserLoginModel } from './../../model/UserLoginModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userLoginModel: UserLoginModel = new UserLoginModel();
  idUsuario: number;
  comfirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private AuthService: AuthService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(){
    window.scroll(0, 0);

    if(environment.token == ""){
      this.router.navigate(['/entrar']);
    }
    this.idUsuario = this.route.snapshot.params['id'];
    this.findByIdUsuario(this.idUsuario);
  }

  confirmarSenha(event: any) {
    this.confirmarSenha = event.target.value;

  }

  tipoUsuario(event: any) {
    this.tipoUsuario = event.target.value;
  }

  atualizar(){
    this.userModel.tipo = this.tipoUser;

    if(this.userModel.senha != this.confirmaSenha){
      alert("Senhas não conferem");

    }else{
      this.authService.cadastrar(this.userModel).subscribe((resp: UserModel) => {
        this.userModel = resp;
        this.router.navigate(['/inicio']);
          alert("Cadastro atualizado com sucesso, faça o login novamente.");
          environment.token = ''
          environment.nome = ''
          environment.foto = ''
          environment.id = 0
          this.router.navigate(['/entrar'])

    })

  }

}

  findByIdUsuario(id: number){
    this.AuthService.getByIdUserModel(id).subscribe((resp: UserModel) => {
      this.idUsuario = resp;

  })

  }
}
