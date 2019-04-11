import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-role-chooser',
  templateUrl: './role-chooser.component.html',
  styleUrls: ['./role-chooser.component.scss'],
})
export class RoleChooserComponent implements OnInit {
objs
obj
user = {
  email:''
}
  constructor(
    private navParams: NavParams,
    private modal: PopoverController,
    private appComponent: AppComponent
  ) {
    this.objs = this.navParams.get("obj")
    console.log("Navparams get",this.objs)
    this.user.email = localStorage.getItem("email")
  }
  applyRole(role){
    console.log(role)
    localStorage.setItem("roleabbr",role)
    this.appComponent.setMenuByRole(role)
    this.modal.dismiss()
  }
  ngOnInit() {}

}
