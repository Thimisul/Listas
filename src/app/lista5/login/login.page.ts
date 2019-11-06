import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email = '';
  public senha = '';
  public checkingUser = true;
  public showloading = false;

  constructor(public usuario: UsuarioService, public router: Router) {
    this.usuario.getUser().subscribe(user => {
      (user.isOnline)
                      ? this.router.navigateByUrl('/lista5/ex1')
                      : this.checkingUser = false;
    });
   }

  ngOnInit() {
  }

  async login(){
    try{
      this.showloading = true;
      await this.usuario.login(this.email, this.senha);
      this.showloading = false;
      this.router.navigateByUrl('lista5/ex1');
    } catch(erro) {
      this.showloading = false;
      console.log(erro);
    }
  }

  async registrar(){
    try {
      await this.usuario.registrar(this.email, this.senha);
    } catch(erro) {
      console.log(erro);
    }
  }

}
