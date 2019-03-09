import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PricelistService } from '../pricelist.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
obj 
  constructor(private modalController: ModalController,private params: NavParams,private pricelist:PricelistService) {
    this.obj = this.params.data
    console.log("OBJ",this.params.data)
  }

  ngOnInit() {}
  closeDialog(){
    console.log("Params",this.params.data.id,this.params.data.capacity)
    this.pricelist.update(this.params.data,result=>{
      console.log("Result",result)
    })
    this.modalController.dismiss()
  }
}
