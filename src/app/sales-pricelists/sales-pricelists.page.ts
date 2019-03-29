import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { PricelistService } from '../pricelist.service';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sales-pricelists',
  templateUrl: './sales-pricelists.page.html',
  styleUrls: ['./sales-pricelists.page.scss'],
})
export class SalesPricelistsPage implements OnInit {
services
service
subServices
subService
subServicesLevel2
medias
noSubservice = false
noSubserviceLevel2 = true
noMedia = true
categories
subservices
hideCapacity
hideMedia
hideSubService
hideService
hidePrice
obj = {
  category_id:0,
  category:'',price:0,
  servicename_id:0,
  servicename:'',
  capacity_id:0,
  capacity:'',
  media_id:0,
  service_id:0,subservice_id:0,
  basicprice:0,normalprice:0,bottomprice:0,upperprice:0,createuser:''
}
capacities
prices
userMail
isLogin
isNotLogin

  constructor(
    private serviceService: ServiceService,
    private priceList: PricelistService,
    private userService: UserService,
    private loginService: LoginService,
    private appComponent: AppComponent
  ) {
    this.userService.isLogin(
      res=>{
      if(res!==false){
        this.isNotLogin = true
        this.userMail = res.email
        this.obj.createuser = res.email
        console.log("Ros",res)
        this.serviceService.getCategories(res => {
          this.categories = res
          this.hideSubService = true
          this.hideMedia = true
          this.hideCapacity = true
          this.hideService = true
          this.hidePrice = true
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
          this.obj.createuser = localStorage.getItem("email")
        })
      }
    });
    this.isLogin = !this.isNotLogin
  }
  getCategories(){
    this.serviceService.getCategories(res => {
      this.categories = res
    })
  }
  populateServices(){
    this.hideSubService = true
    this.hideMedia = true
    this.hideCapacity = true
    this.hideService = true
    this.hidePrice = true
    this.services = null
    this.subservices = null
    this.obj.service_id = null
    this.obj.subservice_id = null
    this.obj.capacity = null
    this.serviceService.getServicesbyCategory({category_id:this.obj.category_id},result => {
      this.services = result
      if(result.length>0){
        this.hideService = false
      }
    })
  }
  populateSubServices(){
    this.subservices = null
    this.hideSubService = true
    this.hideMedia = true
    this.hideCapacity = true
    this.hidePrice = true
    this.obj.media_id = null
    this.obj.subservice_id = null
    this.obj.capacity = null
    this.serviceService.getSubServices({service_id:this.obj.service_id},result => {
      console.log("Subservices",result)
      this.subservices = null
      this.subservices = result
      if(result.length > 0){
        this.hideSubService = false
      }
    })
  }
  getCapacities(){
    this.hideCapacity = true
    this.hidePrice = true
    this.obj.capacity = null
    this.priceList.getcapacities(
      {
        category_id:this.obj.category_id,
        service_id:this.obj.service_id,
        subservice_id:this.obj.subservice_id,
        media_id:this.obj.media_id
      },result => {
      this.capacities = result
      if(result.length>0){
        this.hideCapacity = false
      }
    })
  }
  populateMedias(obj){
    this.hideMedia = true
    this.hideCapacity = true
    this.hidePrice = true
    this.obj.media_id = null
    this.priceList.getMedias(obj, result => {
      this.medias = result
      if(result.length>0){
        this.hideMedia = false
      }
    })
  }
  getPrices(){
    console.log('getPrices invoked')
    if(this.obj.capacity!==null){
    this.priceList.getPrices(this.obj, result => {
      console.log("getPrices RESULT",result)
      console.log('OBJ',this.obj)
      let res = result[0]
      this.hidePrice = false
      this.obj.basicprice = res.basicprice
      this.obj.normalprice = res.normalprice
      this.obj.bottomprice = res.bottomprice
      this.obj.upperprice = res.upperprice
    })}
  }
  ngOnInit() {
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
