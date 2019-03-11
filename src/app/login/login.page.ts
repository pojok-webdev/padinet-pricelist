import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
users
  constructor() {
    this.users = [
      {username:'amir'},{username:'dwi'},{username:'aris'},{username:'dhita'}
    ]
  }
  doLogin(user){
    console.log("Login as ",user)
  }
  ngOnInit() {
  }

}
