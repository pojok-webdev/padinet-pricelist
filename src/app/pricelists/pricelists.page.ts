import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';
import { ModalController } from '@ionic/angular';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-pricelists',
  templateUrl: './pricelists.page.html',
  styleUrls: ['./pricelists.page.scss'],
})
export class PricelistsPage implements OnInit {
objs
  constructor(private priceList:PricelistService,private modalcontroller: ModalController) {
    this.priceList.gets(result=>{
      console.log("Result",result)
      this.objs = result
    })
  }
  showAddPage(){
    window.location.href = '/pricelist-add'
  }
  ngOnInit() {
  }
  doAction(obj,evt){
    console.log("Change",evt.detail.value)
    this.showModal(obj)
    switch(evt.detail.value){
      case 'Hapus':
      this.showModal(obj)
      break
    }
  }
  async showModal(obj){
    const modal = await this.modalcontroller.create({
      component:ConfirmationComponent,
      componentProps:{
        id:obj.id,
        servicename:obj.servicename,
        basicprice:obj.basicprice,
        bottomprice:obj.bottomprice,
        upperprice:obj.upperprice,
        capacity:obj.capacity
      }
    })
    //const {data} = await modal.onDidDismiss()
    //console.log("Data",data)
    return await modal.present()
  }
  doEdit(obj){
    console.log("Edit Obj",obj)
    this.showModal(obj)
  }
  doRemove(obj){
    console.log("Remove Obj",obj)
  }
}
