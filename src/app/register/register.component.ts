import { Component } from '@angular/core';
import { User } from '../shared/user';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'register-selector',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private loginService: LoginService){
  }

  email= "";
  password="";
  name= "";

  user: User = new User();

  register(){
    this.user.name = this.name;
    this.user.email = this.email;
    this.user.password = this.password;
    
    this.loginService.register(this.user)
    .then((user: User) => {
      this.user = user;
      console.log('Usuario: ' + user.name);
    }
    );  
  }
}