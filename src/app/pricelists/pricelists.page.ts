import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { PricelistUpdateComponent } from '../pricelist-update/pricelist-update.component';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { RoleChooserComponent } from '../role-chooser/role-chooser.component';

@Component({
  selector: 'app-pricelists',
  templateUrl: './pricelists.page.html',
  styleUrls: ['./pricelists.page.scss'],
})
export class PricelistsPage implements OnInit {
  obj
  objs
  isLogin
  isNotLogin
  userMail
  roleabbr
  constructor(
    private priceList:PricelistService,
    private modalcontroller: ModalController,
    private userService: UserService,
    private loginService: LoginService,
    private appComponent: AppComponent,
    private popoverController: PopoverController
  ) {
    this.priceList.gets(result=>{
      this.objs = result
    })
    this.userService.isLogin(    
      res=>{
      if(res!==false){
        this.isNotLogin = true
        this.userMail = res.email
        this.roleabbr = localStorage.getItem("roleabbr")
        this.appComponent.setMenuByRole(this.roleabbr)
        if((this.roleabbr === "AM")||(this.roleabbr === "DM")){
          window.location.href = "/sales-pricelists"
        }
      }else{
        this.isNotLogin = false
        this.userMail = ''
        this.loginService.showLoginModal(res => {
          this.userMail = localStorage.getItem("email")
          this.isLogin = false
          this.isNotLogin = true
          this.roleabbr = localStorage.getItem("roleabbr")
          if((this.roleabbr === "AM")||(this.roleabbr === "DM")){
            window.location.href = "/sales-pricelists"
          }
          })
      }
    });
    this.isLogin = !this.isNotLogin
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
  handleModalDismiss(d){
    console.log("D",d)
    this.priceList.gets(result=>{
      console.log("Result",result)
      this.objs = result
    })
  }
  async showModal(obj){
    const modal = await this.modalcontroller.create({
      component:PricelistUpdateComponent,
      componentProps:{
        id:obj.id,
        category_id:obj.category_id,
        servicename_id:obj.servicename_id,
        media_id:obj.media_id,
        servicename:obj.servicename,
        basicprice:obj.basicprice,
        bottomprice:obj.bottomprice,
        normalprice:obj.normalprice,
        upperprice:obj.upperprice,
        capacity:obj.capacity
      }
    })
    modal.onDidDismiss().then((d:any)=>this.handleModalDismiss(d))
    return await modal.present()
  }
  doEdit(obj){
    console.log("Edit Obj",obj)
    this.showModal(obj)
  }
  doRemove(obj){
    console.log("Remove Obj",obj)
  }
  doNego(obj){
    window.location.href = '/pricelist-nego/'+obj.id
  }
  doLogout(){
    this.userService.doLogout({},res=>{
      this.userMail = ""
      this.isLogin = true
      this.isNotLogin = false
      this.loginService.showLoginModal(res => {
        this.userMail = localStorage.getItem("email")
        this.isLogin = false
        this.isNotLogin = true
        this.appComponent.setMenuByRole(this.roleabbr)
        this.roleabbr = localStorage.getItem("roleabbr")
        if(this.roleabbr === "AM"){
          window.location.href = "/sales-pricelists"
        }
        if((this.roleabbr==="AM")||(this.roleabbr==="DM")){
          window.location.href = '/sales-pricelists'
        }else{
          window.location.href = '/pricelists'
        }
      })
    })
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
