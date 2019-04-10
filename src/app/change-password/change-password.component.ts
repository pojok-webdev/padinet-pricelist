import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  password
  confirmpassword
  obj = {
    email:'',
    password:''
  }
  constructor(
    private modal: PopoverController,
    private userService: UserService
  ) {
    this.obj.email = localStorage.getItem("email");
    console.log("Email",this.obj.email)
  }
  ngOnInit() {}
  savePassword(){
    let that = this
    console.log("Save password invoked",this.password,this.confirmpassword)
    if(this.password !== this.confirmpassword){
      alert("password tidak sama")
    }else{
      this.userService.changePassword({email:localStorage.getItem("email"),password:this.password},result=>{
        console.log("Result of Change Password",result)
        this.closeModal()
      })
    }
  }
  closeModal(){
    this.modal.dismiss()
  }
}
