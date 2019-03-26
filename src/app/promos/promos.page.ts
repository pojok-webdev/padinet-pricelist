import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { PromoService } from '../promo.service';
import { ModalController } from '@ionic/angular';
import { PromoDetailComponent } from '../promo-detail/promo-detail.component';

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
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private promoService: PromoService,
    private modalController:ModalController
  ) {
    
    this.userService.isLogin(    
      res=>{
      if(res!==false){
        this.isNotLogin = true
        this.userMail = res.email
        console.log("Ros",res)
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
}
