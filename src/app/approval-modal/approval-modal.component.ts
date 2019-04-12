import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CustomsService } from '../customs.service';

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
  unApproveColor = 'light'
  approveColor = 'light'
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
  changeColor(obj){
    console.log("color",obj)
    this.approveColor = obj.approveColor
    this.unApproveColor = obj.unApproveColor
  }
  setApprove(obj){
    console.log("obj to approve",obj)
    if(obj.approvedprice === null){
      obj.approvedprice = 0
    }
    this.customService.setApprove(obj, result => {
      console.log("setApprove",result)
      this.modalController.dismiss(obj)
    })
  }
  ngOnInit() {}
}
