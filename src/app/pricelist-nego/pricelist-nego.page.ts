import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CustomsService } from '../customs.service';
import { ImageService } from '../image.service';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { ServiceService } from '../service.service';
import { PricelistService } from '../pricelist.service';

@Component({
  selector: 'app-pricelist-nego',
  templateUrl: './pricelist-nego.page.html',
  styleUrls: ['./pricelist-nego.page.scss'],
})
export class PricelistNegoPage implements OnInit {
  obj = {
    branch:'',
    category:'',
    service:'',
    media:'',
    capacity:'',
    customprice:0,
    clientpic:'',
    clienttlp:'',
    clientpichp:'',
    clientemail:'',
    clientaddress:'',
    activationtarget:'',
    img:'',
    createuser:'',
    category_id:0,
    service_id:0,media_id:0,subservice_id:0,basicprice:0,normalprice:0,bottomprice:0,upperprice:0,
    reason:'',otherreason:'',reasoning:''
  }
  medias = [{id:1,name:"Wireless"},{id:2,name:"FO"}]
  services
  capacities
  prices
  uploadImage
  isNotLogin
  isLogin
  userMail
  categories
  subservices
  subServices
  hideSubService
  hideMedia
  noSubserviceLevel2
  noMedia
  noSubservice
  subServicesLevel2
  hidePrice
  hideCapacity
  hideService
  roleabbr
  constructor(
    private categoryservice: CategoryService,
    private custom: CustomsService,
    private imageService: ImageService,
    private userService: UserService,
    private loginService: LoginService,
    private appComponent: AppComponent,
    private serviceService: ServiceService,
    private priceList: PricelistService
  ) {
    this.userService.isLogin(
      res=>{
      if(res!==false){
        this.isNotLogin = true
        this.userMail = res.email
        this.obj.createuser = res.email
        console.log("Ros",res)
        this.roleabbr = localStorage.getItem("roleabbr")
        console.log("roleabbr",this.roleabbr)
        this.appComponent.setMenuByRole(this.roleabbr)

        this.serviceService.getCategories(result => {
          console.log("Ctegories",result)
          this.categories = result
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
  getvalbykey(arr,key,callback){
    let out=''
    arr.forEach(element => {
      console.log('Element',element)
      if(element.id == key){
        console.log("It's match",element)
        out = element.name
        callback(out)
      }
    });
  }
/*  populateServices(){
    this.getvalbykey(this.categories,this.obj.category_id,result => {
      console.log("CATEGORY",result)
      this.obj.category = result
    })
    console.log('Category name',this.categories[this.obj.category_id])
    console.log("category_id",this.obj.category_id)
    if(this.obj.category_id == 2){
      this.hideSubService = false
      this.hideMedia = false
    }
    this.serviceService.getServicesbyCategory({category_id:this.obj.category_id},result => {
      this.services = result
    })
    
  }
  populateSubServices(){
    this.getvalbykey(this.services,this.obj.service_id,result => {
      console.log("SERVICE",result)
      this.obj.service = result
    })
    this.serviceService.getSubServices({service_id:this.obj.service_id},result => {
      this.subservices = result
    })
  }*/
  /*getCapacities(){
    this.getvalbykey(this.medias,this.obj.media_id,result => {
      console.log("MEDIA",result)
      this.obj.media = result
    })

    console.log("get capacity OBJ",this.obj)
    this.priceList.getcapacities(
      {
        category_id:this.obj.category_id,
        service_id:this.obj.service_id,
        subservice_id:this.obj.subservice_id,
        media_id:this.obj.media_id
      },result => {
      this.capacities = result
    })
  }
  getPrices(){

    console.log('getPrices invoked')
    this.priceList.getPrices(this.obj, result => {
      console.log("getPrices RESULT",result)
      console.log('OBJ',this.obj)
      let res = result[0]
      this.obj.basicprice = res.basicprice
      this.obj.normalprice = res.normalprice
      this.obj.bottomprice = res.bottomprice
      this.obj.upperprice = res.upperprice
    })
  }*/
  serviceChange(event){
    let _service_id =  event.target.value
    this.subServices = [{service_id:_service_id,name:'-',id:0}]
    this.noSubserviceLevel2 = true
    this.noMedia = true
    this.serviceService.getSubServices({service_id:_service_id},result => {
      console.log("Subservices",result)
      this.noSubservice = false
      if(result.length===0){
        this.noSubservice = true
      }
      this.subServices = result
    })
  }
  subServiceChange(event){
    let _subservice_id = event.target.value
    this.serviceService.getSubServicesLevel2({subservice_id:_subservice_id},result => {
      this.noSubserviceLevel2 = false
      this.noMedia = false
      if(result.length === 0){
        this.noSubserviceLevel2 = true
        this.noMedia = true
      }
      this.subServicesLevel2 = result
    })
  }

  ngOnInit() {
  }
  changeCategory(obj){
    this.categoryservice.servicenamegetbycatgory(obj,result => {
      this.services = result
    })
  }
  /*changeCapacity(obj){
    console.log("getpa",obj)
    this.categoryservice.getcapacities(obj,result => {
      console.log("getcapacities",result)
      this.capacities = result
    })
  }
  getPrices(obj){
    this.categoryservice.getprices(obj,result => {
      this.prices = result
    })
  }*/
  save(obj){
    console.log("OBJ to save",obj)
    this.custom.save(obj,result => {
      console.log("Result",result)
      window.location.href = '/quotation-lists'
    })
  }
  openFile(event,obj){
    console.log("Data",event.target)
    let that = this
    var input = event.target;
    var myElement = document.getElementById("img")
    //myElement.attributes["src"] = 
    var filereader = new FileReader();
    filereader.onload = function(){
      that.imageService.resizeImage(filereader.result,1600,res=>{
        //myElement.attributes["src"] = res
        that.uploadImage = res
        obj.img = res
        console.log("Res",res)
      })
  
    }
    filereader.readAsDataURL(input.files[0]);
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

}
