import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.scss'],
})
export class SetpasswordComponent implements OnInit {
  obj = {
    email:'',password:''
  }
  constructor(
    private user: UserService,
    private navparam: NavParams,
    private modalController: ModalController
  ) {
    this.obj.email = this.navparam.get('email')
  }

  ngOnInit() {}
  doSetPassword(obj){
    this.user.changePassword(obj,result => {
      console.log("Result",result)
      this.modalController.dismiss()
    })
  }
}
