import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../shared/user';

@Component({
  selector: 'top-selector',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit{

  private user: User;

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.loginService.getUserOn()
    .then((user: User) => {
      this.user = user;
      console.log( user);
    }
    );  
  }

  out(){
    this.loginService.getOut();
  }
 
}