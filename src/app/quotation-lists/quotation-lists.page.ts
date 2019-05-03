import { Component, OnInit } from '@angular/core';
import { CustomsService } from '../customs.service';
import { LoginComponent } from '../login/login.component';
import { ModalController, MenuController, PopoverController } from '@ionic/angular';
import { QuotDetailComponent } from '../quot-detail/quot-detail.component';
import { UserService } from '../user.service'
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';
import { ApprovalModalComponent } from '../approval-modal/approval-modal.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { RoleChooserComponent } from '../role-chooser/role-chooser.component';
@Component({
  selector: 'app-quotation-lists',
  templateUrl: './quotation-lists.page.html',
  styleUrls: ['./quotation-lists.page.scss'],
})
export class QuotationListsPage implements OnInit {
  quotations
  obj
  isNotLogin
  isLogin
  userMail
  roleabbr
  hidecantApprove
  hideQuoteEdit
  constructor(
    private custom: CustomsService,
    private modalController: ModalController,
    private userService: UserService,
    private loginService: LoginService,
    private appComponent: AppComponent,
    private menuController: MenuController,
    private popoverController: PopoverController
  ) {
    let email = localStorage.getItem("email")
    let roleabbr = localStorage.getItem("roleabbr")
    console.log("Email",email)
    if((roleabbr==="AM")||(roleabbr==="DM")){
      this.custom.getsbyemail({email:email},result => this.populateQuotes(result,false))
    }else{
      this.custom.gets(result => this.populateQuotes(result,true))
    }
    this.userService.isLogin(
      res=>{
        if(res!==false){
          this.isNotLogin = true
          this.userMail = res.email
          console.log("Ros",res)
          this.roleabbr = localStorage.getItem("roleabbr")
          console.log("roleabbr",this.roleabbr)
          this.appComponent.setMenuByRole(this.roleabbr)  
          if((this.roleabbr==="AM")||(this.roleabbr==="DM")){
            this.hidecantApprove = true
          }else{
            this.hidecantApprove = false
          }
  
        }else{
          this.isNotLogin = false
          this.userMail = ''
          console.log("Res",res)
          this.loginService.showLoginModal(res => {
            console.log("Here your data",res)
            if((roleabbr==="AM")||(roleabbr==="DM")){
              this.custom.getsbyemail({email:email},result => this.populateQuotes(result,false))
            }else{
              this.custom.gets(result => this.populateQuotes(result,true))
            }
            this.userMail = localStorage.getItem("email")
            this.isLogin = false
            this.isNotLogin = true
          })
        }
    });
    this.isLogin = !this.isNotLogin
  }
  populateQuotes(objs,ableToEdit){
    this.hideQuoteEdit = ableToEdit
    objs.forEach(obj => {
      if(obj.approved!==null){
        obj.hideQuoteEdit = true
      }
    })
    this.quotations = objs
    this.quotations.forEach(quotation => {
      switch(quotation.approved){
        case '0':
        quotation.statuscolor = "danger"
        quotation.hideUnapprovalReason = false
        quotation.hideApprovedPrice = true
        break
        case '1':
        quotation.statuscolor = "success"
        quotation.hideUnapprovalReason = true
        quotation.hideApprovedPrice = false
        break
        default:
        quotation.statuscolor = "warning"
        quotation.hideUnapprovalReason = true
        quotation.hideApprovedPrice = true
        break
      }
    });
    console.log('quotation',this.quotations)

  }
  getStatusColor(status){
    console.log("Status",status)
    let _color = 'warning'
    switch(status){
      case '0':
        _color = 'danger'
      break
      case '1':
      _color = 'success'
    }
    return _color
  } 
  ngOnInit() {
  }
  handleModalDismiss(d){
    console.log("D",d)
  }
  async showModal(){
    let obj = {
      email:'puji@padi.net.id'
    }
    const modal = await this.modalController.create({
      component:LoginComponent,
      componentProps:{
        email:obj.email,
        password:obj.email
      }
    })
    modal.onDidDismiss().then((d:any)=>this.handleModalDismiss(d))

    return await modal.present()
  }
  showLogin(){
    this.loginService.showLoginModal(res => {
      console.log("Here the data got",res)
      console.log("RoleAbbr",res.data.result)
      this.userMail = localStorage.getItem("email")
      this.isLogin = false
      this.isNotLogin = true
      this.obj.createuser = localStorage.getItem("email")
    })
  }
  monthChange(event){
    console.log("Month already changed",event.target.value)
    let monthyear = event.target.value
    this.custom.getByMonth({monthyear:monthyear},result=>{
      this.quotations = result
    })
  }
  async showDetail(obj){
    console.log("OBJ",obj)
    const modal = await this.modalController.create({
      component:QuotDetailComponent,
      componentProps:{
        obj:obj
      },cssClass:"quoteDetail"
    })
    modal.onDidDismiss().then((d:any)=>this.handleModalDismiss(d))
    return await modal.present()
  }
  reloadApproval(approvalStatus){
    console.log("ApprovalStatus",approvalStatus)
    let quotation = this.quotations.find(quot=>quot.id === approvalStatus.data.id)
    console.log("Quotation found",quotation)
    switch(quotation.approved){
      case   "0":
      quotation.approvalstring = "Tidak Disetujui"
      quotation.hideUnapprovalReason = false
      quotation.statuscolor = "danger"
      quotation.hideApprovedPrice = true
      break
      case   "1":
      quotation.approvalstring = "Disetujui"
      quotation.hideUnapprovalReason = true
      quotation.statuscolor = "success"
      quotation.hideApprovedPrice = false
      break
      default:
      quotation.approvalstring = "Belum Disetujui"
      quotation.hideUnapprovalReason = true
      quotation.statuscolor = "warning"
      quotation.hideApprovedPrice = true
      break
    }
  }
  async showApprovalPage(quotation){
    const modal = await this.modalController.create({
      component:ApprovalModalComponent,
      componentProps:{
        obj:quotation
      }
    })
    modal.onDidDismiss().then((approvalStatus:any)=>this.reloadApproval(approvalStatus))
    return await modal.present()
  }
  doLogout(){
    this.userService.doLogout({},res=>{
      console.log("Res",res)
      this.userMail = ""
      this.isLogin = true
      this.isNotLogin = false
      this.loginService.showLoginModal(res => {
        console.log("Here the logout data",res)
        let roleAbbr = res.data.result.obj.roleabbr
        console.log("RoleAbbr",res.data.result.obj.roleabbr)
        this.userMail = localStorage.getItem("email")
        this.isLogin = false
        this.isNotLogin = true
        this.appComponent.setMenuByRole(roleAbbr)
        if((roleAbbr==="AM")||(roleAbbr==="DM")){
          this.hidecantApprove = true
          window.location.href = '/sales-pricelists'
        }else{
          this.hidecantApprove = false
          window.location.href = '/pricelists'
        }
      })
    })
  }
  toggleMenu(){
    console.log("toggle menu invoked")
    this.menuController.toggle("left")
  }
  doUserTask(obj){
    console.log("OBJ doUserTask",obj)
  }
  async showProfile(){
    const modal = await this.popoverController.create({
      component: ChangePasswordComponent,
      componentProps:{
        obj:this.obj
      }
    })
    modal.onDidDismiss().then((d:any)=>this.doUserTask(d))
    return await modal.present()
  }
  afterChooseRole(obj){
    console.log("OBJ after choose Role",obj)
    location.reload()
  }
  showChooseRole(){
    this.userService.getRoles({email:localStorage.getItem("email")},result => {
      this.showChooseRoleModal(result)      
    });

  }
  async showChooseRoleModal(obj){
    let pop = await this.popoverController.create({
      component:RoleChooserComponent,
      componentProps:{
        obj:obj
      }
    })
    pop.onDidDismiss().then((d:any)=>this.afterChooseRole(d))
    return await pop.present()
  }
}
