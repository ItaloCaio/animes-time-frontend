import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../shared/user';

@Component({
  selector: 'login-selector',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  email= "";
  password="";
  userLogin: User = new User();
   home = 'Início';

  constructor(private loginService: LoginService){
  }

  ngOnInit(): void {
    this.loginService.getUserOn()
    .then((user: User) => {
      this.user = user;
      console.log( user);
    }
    );  
  }

  login(form) {  
    this.userLogin.email = this.email;
    this.userLogin.password = this.password;

    this.loginService.login(this.userLogin)
    .then((user: User) => {
      this.user = user;
      console.log('Usuario: ' + user.name);
    }
    );  
    
  }
}