import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CustomsService } from '../customs.service';
import { ImageService } from '../image.service';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';

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
    createuser:''
  }
  services
  capacities
  prices
  uploadImage
  isNotLogin
  isLogin
  userMail

  constructor(
    private categoryservice: CategoryService,
    private custom: CustomsService,
    private imageService: ImageService,
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
  
  ngOnInit() {
  }
  changeCategory(obj){
    this.categoryservice.servicenamegetbycatgory(obj,result => {
      this.services = result
    })
  }
  changeCapacity(obj){
    this.categoryservice.getcapacities(obj,result => {
      console.log("getcapacities",result)
      this.capacities = result
    })
  }
  getPrices(obj){
    this.categoryservice.getprices(obj,result => {
      this.prices = result
    })
  }
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
}
