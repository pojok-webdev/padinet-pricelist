import { Component, OnInit } from '@angular/core';
import { CustomsService } from '../customs.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { ModalController } from '@ionic/angular';
import { ApprovalConfirmationComponent } from '../approval-confirmation/approval-confirmation.component';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {
  obj = {
    name:'',_img:'',unapprovalreason:'',approved:'1'
  }
  hideUnApprovalReason = true
  hideApprovalReason = false
  hideApprovalPrice = false
  constructor(
    private customService: CustomsService,
    private router: ActivatedRoute,
    private imageService: ImageService,
    private modalController: ModalController
    ) {
      let _id = this.router.snapshot.paramMap.get("id")
      console.log("_ID",_id)
      this.customService.getById({id:_id}, result => {
        console.log("RESULT",result)
        this.obj = result[0]
        var byteArray = new Uint8Array(result[0].img.data)
        var blob = new Blob([byteArray],{type:'image/jpeg'})
        this.imageService.createImageFromBlob(blob, result => {
          this.obj._img = result
        })
      })
      let email = localStorage.getItem("email")
      let roleabbr = localStorage.getItem("roleabbr")
      console.log("Email",email)
      if((roleabbr==="AM")||(roleabbr==="DM")){
        window.location.href = '/quotation-lists'
      }else{

      }
  
    }
  ngOnInit() {
  }
  setApprove(obj){
    let _id = this.router.snapshot.paramMap.get("id")
    obj.id = _id
    obj.approved = this.obj.approved
    if(obj.approved === '0'){
      obj.note = obj.unapprovalreason
    }else{
      obj.note = obj.approvedprice
    }
    this.customService.setApprove(obj, result => {
      console.log("setApprove",result)
      this.showModal(obj)
    })
  }
  displayReason(obj){
    this.hideUnApprovalReason = obj.displayStatus
    this.hideApprovalPrice = !this.hideUnApprovalReason
    this.obj.approved = obj.approved
  }
  unApproveColor = 'light'
  approveColor = 'light'
  changeColor(obj){
    console.log("color",obj)
    this.approveColor = obj.approveColor
    this.unApproveColor = obj.unApproveColor
  }
  async showModal(obj){
    const modal = await this.modalController.create({
      component:ApprovalConfirmationComponent,
      componentProps:{
        obj:this.obj
      }
    })
    modal.onDidDismiss().then((d:any)=>{
      console.log("D",d)
    })
    return await modal.present()
  }

}
