import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pricelist-update',
  templateUrl: './pricelist-update.component.html',
  styleUrls: ['./pricelist-update.component.scss'],
})
export class PricelistUpdateComponent implements OnInit {
obj
  constructor(
    private pricelist: PricelistService,
    private params: NavParams, 
    private modalController: ModalController
  ) {
    this.obj = this.params.data
    console.log("OBJ",this.params.data)
  }
  saveService(){
    console.log("Params",this.params.data.id,this.params.data.capacity)
    this.pricelist.update(this.params.data,result=>{
      console.log("Result",result)
    })
    this.modalController.dismiss()
  }
  closeDialog(){
    this.modalController.dismiss()
  }
  ngOnInit() {}

}
