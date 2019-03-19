import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-quot-detail',
  templateUrl: './quot-detail.component.html',
  styleUrls: ['./quot-detail.component.scss'],
})
export class QuotDetailComponent implements OnInit {
obj
  constructor(
    private navParams:NavParams,
    private modal: ModalController,
    private imageService: ImageService
  ) {
    this.obj = this.navParams.get('obj')
    console.log("Reason",this.obj)
      var byteArray = new Uint8Array(this.obj.img.data)
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
}
