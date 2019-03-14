import { Component, OnInit } from '@angular/core';
import { CustomsService } from '../customs.service';
import { LoginComponent } from '../login/login.component';
import { ModalController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quotation-lists',
  templateUrl: './quotation-lists.page.html',
  styleUrls: ['./quotation-lists.page.scss'],
})
export class QuotationListsPage implements OnInit {
  quotations
  obj
  constructor(
    private custom: CustomsService,
    private modalController: ModalController,
  ) {
    let email = localStorage.getItem("email")
    console.log("Email",email)
    this.custom.gets(result => {
      this.quotations = result
    })
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
    //const {data} = await modal.onDidDismiss()
    //console.log("Data",data)
    return await modal.present()
  }
}
