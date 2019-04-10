import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
obj = {
  email:'',password:''
}
  constructor(
    private user: UserService,
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  doLogin(obj){
    if(obj.email!==""){
    this.user.doLogin(obj,result=>{
      console.log("Result",result)
      if(result.result){
      this.modalController.dismiss({
        result:result
      })}
    })}else{
      alert("Email tidak boleh kosong")
    }
  }

}
