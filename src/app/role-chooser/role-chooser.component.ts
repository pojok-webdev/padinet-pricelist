import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-role-chooser',
  templateUrl: './role-chooser.component.html',
  styleUrls: ['./role-chooser.component.scss'],
})
export class RoleChooserComponent implements OnInit {
objs
obj
  constructor(
    private navParams: NavParams
  ) {
    this.objs = this.navParams.get("obj")
    console.log("Navparams get",this.objs)
  }
  applyRole(role){
    console.log(role)
  }
  ngOnInit() {}

}
