import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CustomsService } from '../customs.service';
import { ImageService } from '../image.service';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { AppComponent } from '../app.component';
import { ServiceService } from '../service.service';
import { PricelistService } from '../pricelist.service';
import { PopoverController } from '@ionic/angular';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { RoleChooserComponent } from '../role-chooser/role-chooser.component';

@Component({
  selector: 'app-pricelist-nego',
  templateUrl: './pricelist-nego.page.html',
  styleUrls: ['./pricelist-nego.page.scss'],
})
export class PricelistNegoPage implements OnInit {
  actor
  obj = {
    clientname:'',
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
    basicpricef:0,normalpricef:0,bottompricef:0,upperpricef:0,
    reason:'',otherreason:'',reasoning:'',branch_id:'',quotation_date:''
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
  hideOtherReason
  roleabbr
  constructor(
    private categoryservice: CategoryService,
    private custom: CustomsService,
    private imageService: ImageService,
    private userService: UserService,
    private loginService: LoginService,
    private appComponent: AppComponent,
    private serviceService: ServiceService,
    private priceList: PricelistService,
    private popoverController: PopoverController
  ) {
    this.hideOtherReason = true
    this.userService.isLogin(
      res=>{
      if(res!==false){
        this.actor = this.userService.roles
        console.log("Actor",this.actor)
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
          this.actor = this.userService.roles
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
  validateObj(obj,callback){
    let isValid = true
    console.log("Obj to save",obj)
    
    if(obj.clientname == ""){
      alert("Nama Pelanggan tidak boleh kosong")
      isValid = false
    }
    if(obj.activationtarget == ""){
      alert("Tanggal target Aktivasi tidak boleh kosong")
      isValid = false
    }
    if(obj.branch_id == ""){
      alert("Cabang PadiNET tidak boleh kosong")
      isValid = false
    }
    if(obj.category_id == ""){
      alert("Kategori tidak boleh kosong")
      isValid = false
    }
    if(obj.service_id == ""){
      alert("Layanan tidak boleh kosong")
      isValid = false
    }
    if(obj.clientpic == ""){
      alert("PIC tidak boleh kosong")
      isValid = false
    }
    if(obj.clienttlp == ""){
      alert("Telp tidak boleh kosong")
      isValid = false
    }
    if(obj.clientpichp == ""){
      alert("HP PIC tidak boleh kosong")
      isValid = false
    }
    if(obj.quotation_date == ""){
      alert("Tanggal Penawaran tidak boleh kosong")
      isValid = false
    }
    if(obj.clientemail == ""){
      alert("Tanggal Penawaran tidak boleh kosong")
      isValid = false
    }
    if(obj.clientaddress == ""){
      alert("Tanggal Penawaran tidak boleh kosong")
      isValid = false
    }
    if(obj.reason == ""){
      alert("Alasan tidak boleh kosong")
      isValid = false
    }
    if(obj.customprice == ""){
      alert("Harga Custom tidak boleh kosong")
      isValid = false
    }
    if(obj.normalprice == ""){
      alert("Harga tidak boleh kosong, cek Media, Kapasitas")
      isValid = false
    }
    if(isValid){
      callback(obj)
    }
  }
  save(obj){
    console.log("OBJ to save",obj)
    this.validateObj(obj,validatedObj => {
      this.custom.save(validatedObj,result => {
        console.log("Result",result)
        window.location.href = '/quotation-lists'
      })
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
        let obj = res.data.result.obj
        if(obj.length>1){
          this.actor = obj
          this.showChooseRoleModal(obj)
        }
        let roleAbbr = res.data.result.obj.roleabbr

        console.log("RoleAbbr",res.data.result.obj.roleabbr)
        this.userMail = localStorage.getItem("email")
        this.isLogin = false
        this.isNotLogin = true
        this.appComponent.setMenuByRole(roleAbbr)
      })
    })
  }
  afterChooseRole(obj){
    console.log("OBJ after choose Role",obj)
    console.log("Actor",this.actor)
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
      this.obj.basicprice = res.basicpricef
      this.obj.normalprice = res.normalpricef
      this.obj.bottomprice = res.bottompricef
      this.obj.upperprice = res.upperpricef
    })}
  }
  showOtherReason(){
    this.obj.otherreason = ""
    this.hideOtherReason = true
    if(this.obj.reason === "lainnya"){
      this.hideOtherReason = false
    }
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
