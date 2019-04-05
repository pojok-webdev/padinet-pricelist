import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-approval-confirmation',
  templateUrl: './approval-confirmation.component.html',
  styleUrls: ['./approval-confirmation.component.scss'],
})
export class ApprovalConfirmationComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}
  closeDialog(){
    console.log("done")
    this.modalController.dismiss()
  }

}
