import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private modalController:ModalController
  ) {}
  async showLoginModal(callback){
    let obj = {
      email:''
    }
    const modal = await this.modalController.create({
      component:LoginComponent,
      componentProps:{
        email:obj.email,
        password:obj.email
      },
      backdropDismiss:false
    })
    modal.onDidDismiss().then((d:any)=>{
      callback(d)
    })
    return await modal.present()
  }
}
