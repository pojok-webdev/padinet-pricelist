import { Component, OnInit } from '@angular/core';
import { SetpasswordComponent } from '../setpassword/setpassword.component';
import { ModalController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
users
  constructor(private modalcontroller: ModalController,private user: UserService) {
    console.log("Whassap bro ?")
    this.user.gets(result => {
      console.log("Result of users",result)
      this.users = result
    })
  }
  doLogin(user){
    console.log("Login as ",user)
  }
  ngOnInit() {
  }
  handleModalDismiss(d){
    console.log("D",d)
  }
  async showModal(obj){
    const modal = await this.modalcontroller.create({
      component:SetpasswordComponent,
      componentProps:{
        email:obj.email,
        password:obj.password
      }
    })
    modal.onDidDismiss().then((d:any)=>this.handleModalDismiss(d))
    //const {data} = await modal.onDidDismiss()
    //console.log("Data",data)
    return await modal.present()
  }
  setPassword(user){
    this.showModal(user)
  }
}
