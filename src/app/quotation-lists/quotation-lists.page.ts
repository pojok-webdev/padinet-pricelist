import { Component, OnInit } from '@angular/core';
import { CustomsService } from '../customs.service';
import { LoginComponent } from '../login/login.component';
import { ModalController } from '@ionic/angular';
import { QuotDetailComponent } from '../quot-detail/quot-detail.component';
import { UserService } from '../user.service'
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';

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
  constructor(
    private custom: CustomsService,
    private modalController: ModalController,
    private userService: UserService,
    private loginService: LoginService,
    private appComponent: AppComponent
  ) {
    let email = localStorage.getItem("email")
    console.log("Email",email)
    this.custom.gets(result => {
      this.quotations = result
    })
    this.userService.isLogin(
      res=>{
        if(res!==false){
          this.isNotLogin = true
          this.userMail = res.email
          console.log("Ros",res)
        }else{
          this.isNotLogin = false
          this.userMail = ''
          console.log("Res",res)
          this.loginService.showLoginModal(res => {
            console.log("Here your data",res)
            this.custom.gets(result => {
              this.quotations = result
            })
            this.userMail = localStorage.getItem("email")
            this.isLogin = false
            this.isNotLogin = true
          })
        }
    });
    this.isLogin = !this.isNotLogin
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
      }
    })
    modal.onDidDismiss().then((d:any)=>this.handleModalDismiss(d))
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
      })
    })
  }
}
