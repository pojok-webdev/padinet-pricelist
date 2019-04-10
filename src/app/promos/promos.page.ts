import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { PromoService } from '../promo.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { PromoDetailComponent } from '../promo-detail/promo-detail.component';
import { AppComponent } from '../app.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage implements OnInit {
  isLogin
  isNotLogin
  userMail
  promos
  roleabbr
  obj
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private promoService: PromoService,
    private modalController:ModalController,
    private appComponent: AppComponent,
    private popoverController: PopoverController
  ) {
    
    this.userService.isLogin(    
      res=>{
      if(res!==false){
        this.isNotLogin = true
        this.userMail = res.email
        console.log("Ros",res)
        this.roleabbr = localStorage.getItem("roleabbr")
        console.log("roleabbr",this.roleabbr)
        this.appComponent.setMenuByRole(this.roleabbr)

        this.promoService.gets(res => {
          this.promos = res
        })
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
    window.location.href = '/promo-add'
  }
  ngOnInit() {
  }
  async showDetail(obj){
    const _modal = await this.modalController.create({
      component:PromoDetailComponent,
      componentProps:{
        obj:obj
      }
    })
    _modal.onDidDismiss().then(out=>{})
    return await _modal.present()
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
        this.roleabbr = localStorage.getItem("roleabbr")
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

}
