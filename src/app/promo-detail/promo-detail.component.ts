import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-promo-detail',
  templateUrl: './promo-detail.component.html',
  styleUrls: ['./promo-detail.component.scss'],
})
export class PromoDetailComponent implements OnInit {
obj
  constructor(
    private navParams:NavParams,
    private modal: ModalController,
    private imageService: ImageService
  ) {
    this.obj = this.navParams.get('obj')
    console.log("Reason",this.obj)
    var byteArray = new Uint8Array(this.obj.flyer.data)
    var blob = new Blob([byteArray],{type:'image/jpeg'})
    this.imageService.createImageFromBlob(blob,result => {
      this.obj._img = result
    })
  }
  ngOnInit() {}
  closeDialog(){
    console.log("done")
    this.modal.dismiss()
  }
  editPromo(obj){
    window.location.href = '/promo-edit/'+obj.id
  }
}
