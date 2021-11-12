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

  constructor(
    private AuthService: AuthService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(){
    window.scrollTo(0, 0);

    if(environment.token == ""){
      this.router.navigate(['/entrar']);
    }
    this.idUsuario = this.route.snapshot.params['id'];
    this.findByIdUsuario(this.idUsuario);
  }

  confirmarSenha(event: any){

}

  tipoUsuario(event: any){

}

  atualizar(){

  }

  findByIdUsuario(id: number){
    this.AuthService.getByIdUserModel(id).subscribe((resp: UserModel) => {
      this.idUsuario = resp;

  })

  }
}
