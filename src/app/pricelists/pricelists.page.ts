import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';
import { ModalController } from '@ionic/angular';
import { PricelistUpdateComponent } from '../pricelist-update/pricelist-update.component';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-pricelists',
  templateUrl: './pricelists.page.html',
  styleUrls: ['./pricelists.page.scss'],
})
export class PricelistsPage implements OnInit {
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
    private appComponent: AppComponent
  ) {
    this.priceList.gets(result=>{
      console.log("Result",result)
      this.objs = result
    })
    this.userService.isLogin(    
      res=>{
      if(res!==false){
        this.isNotLogin = true
        this.userMail = res.email
        this.roleabbr = localStorage.getItem("roleabbr")
        console.log("roleabbr",this.roleabbr)
        this.appComponent.setMenuByRole(this.roleabbr)
        console.log("Ros",res)
      }else{
        this.isNotLogin = false
        this.userMail = ''
        console.log("Res",res)
        this.loginService.showLoginModal(res => {
          console.log("Here the data",res)
          this.userMail = localStorage.getItem("email")
          this.isLogin = false
          this.isNotLogin = true
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
  doNego(obj){
    window.location.href = '/pricelist-nego/'+obj.id
  }
  doLogout(){
    this.userService.doLogout({},res=>{
      console.log("Res",res)
      this.userMail = ""
      this.isLogin = true
      this.isNotLogin = false
      this.loginService.showLoginModal(res => {
        console.log("Here the data",res)
        this.userMail = localStorage.getItem("email")
        this.isLogin = false
        this.isNotLogin = true
      })
    })
  }
}
