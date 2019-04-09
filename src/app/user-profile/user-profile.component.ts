import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}
  showChangePasswordModal(){
    console.log("showChangePasswordModal invoked")
    this.modal.dismiss({fuModal:'changePassword'})
  }
}
