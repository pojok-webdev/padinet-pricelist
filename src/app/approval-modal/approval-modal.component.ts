import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CustomsService } from '../customs.service';
import { ApprovalConfirmationComponent } from '../approval-confirmation/approval-confirmation.component';

@Component({
  selector: 'app-approval-modal',
  templateUrl: './approval-modal.component.html',
  styleUrls: ['./approval-modal.component.scss'],
})
export class ApprovalModalComponent implements OnInit {

  obj = {id:0,clientname:'',branch:'',clientaddress:'',category:'',service:'',media:'',reason:'',activationtarget:'',
  quotation_date:'',custompricef:'',basicpricef:'',_img:'',unapprovalreason:'',approved:'0'}
  hideUnApprovalReason = true
  hideApprovedPrice = true
  hideApproval
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private customService: CustomsService
  ) {
    this.obj = this.navParams.get('obj')
    console.log("OBJ",this.obj)
    if(this.obj.approved === null){
      this.hideApproval = false
    }else{
      this.hideApproval = true
    }
    console.log("OBJ",this.obj)
  }
  displayReason(obj){
    this.hideUnApprovalReason = obj.displayStatus
    this.obj.approved = obj.approved
    this.hideApprovedPrice = !obj.displayStatus
  }

  unApproveColor = 'light'
  approveColor = 'light'
  changeColor(obj){
    console.log("color",obj)
    this.approveColor = obj.approveColor
    this.unApproveColor = obj.unApproveColor
  }
  setApprove(obj){
    this.customService.setApprove(obj, result => {
      console.log("setApprove",result)
      this.modalController.dismiss()
      this.showModal(obj)
    })
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

  ngOnInit() {}

}
