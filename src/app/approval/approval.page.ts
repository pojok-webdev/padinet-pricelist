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
    }
  ngOnInit() {
  }
  setApprove(obj){
    let _id = this.router.snapshot.paramMap.get("id")
    obj.id = _id
    this.customService.setApprove(obj, result => {
      console.log("setApprove",result)
      this.showModal(obj)
    })
  }
  toggleUnApprovalReason(){
    if(this.obj.approved==='1'){
      this.hideApprovalReason = false
      this.hideUnApprovalReason = true
    }else if(this.obj.approved==='0'){
      this.hideApprovalReason = true
      this.hideUnApprovalReason = false  
    }else{
      this.hideApprovalReason = false
      this.hideUnApprovalReason = true
    }
    console.log("Approval invoked",this.hideUnApprovalReason)
  }
  displayReason(obj){
    this.hideUnApprovalReason = obj.displayStatus
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
    //const {data} = await modal.onDidDismiss()
    //console.log("Data",data)
    return await modal.present()
  }

}
