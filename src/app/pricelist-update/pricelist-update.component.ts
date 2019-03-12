import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';
import { ModalController, NavParams } from '@ionic/angular';
import { ServicenameService } from '../servicename.service';

@Component({
  selector: 'app-pricelist-update',
  templateUrl: './pricelist-update.component.html',
  styleUrls: ['./pricelist-update.component.scss'],
})
export class PricelistUpdateComponent implements OnInit {
obj
services
  constructor(
    private pricelist: PricelistService,
    private params: NavParams, 
    private modalController: ModalController,
    private servicename: ServicenameService
  ) {
    this.obj = this.params.data
    console.log("OBJ",this.params.data)
    this.servicename.getbycategory(this.obj,result => {
      this.services = result
    })
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
