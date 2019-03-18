import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quot-detail',
  templateUrl: './quot-detail.component.html',
  styleUrls: ['./quot-detail.component.scss'],
})
export class QuotDetailComponent implements OnInit {
obj
  constructor(
    private navParams:NavParams,
    private modal: ModalController
  ) {
    this.obj = this.navParams.get('obj')
    console.log("Reason",this.obj)
  }

  ngOnInit() {}
  closeDialog(){
    console.log("done")
    this.modal.dismiss()
  }
}
