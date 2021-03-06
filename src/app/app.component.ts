import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './user.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [
    {
      title: 'Informasi Harga',
      url: '/pricelists',
      icon: 'list'
    },
    {
      title: 'Pengajuan Harga',
      url: '/pricelist-nego',
      icon: 'list'
    },
    {
      title: 'Histori Pengajuan Harga',
      url: '/quotation-lists',
      icon: 'list'
    }
  ];
  isNotLogin
  isLogin
  userMail
  roleabbr
  obj = {
    createuser:''
  }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private loginService: LoginService,
    private menuController: MenuController
  ) {
    this.initializeApp();
    this.userService.isLogin(    
      res=>{
      if(res!==false){
        this.isNotLogin = true
        this.userMail = res.email
        this.obj.createuser = res.email
        this.roleabbr = localStorage.getItem("roleabbr")
        console.log("roleabbr",this.roleabbr)
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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  setMenuByRole(roleAbbr){
    console.log("setMenuByRole invoked",roleAbbr)
    let priceInfoLabel = 'Informasi Harga'
    let pricelisturl = ''
    let promo = ''
    let promoTitle = ''
    let promoIcon = ''
    switch(roleAbbr){
      case 'Adm':
      priceInfoLabel = 'Informasi Harga (Admin)'
      pricelisturl = '/pricelists'
      promo = '/promos'
      promoIcon = 'list'
      promoTitle = 'Promo'
      break
      case 'AM':
      priceInfoLabel = 'Informasi Harga (AM)'
      pricelisturl = '/sales-pricelists'
      promo = '/'
      promoIcon = ''
      promoTitle = ''
      break
      case 'SM':
      priceInfoLabel = 'Informasi Harga (SM)'
      pricelisturl = '/pricelists'
      promo = '/promos'
      promoIcon = 'list'
      promoTitle = 'Promo'
      break
      case 'GM':
      priceInfoLabel = 'Informasi Harga (GM)'
      pricelisturl = '/pricelists'
      promo = '/promos'
      promoIcon = 'list'
      promoTitle = 'Promo'
      break
      case 'DM':
      priceInfoLabel = 'Informasi Harga (DM)'
      pricelisturl = '/sales-pricelists'
      promo = '/promos'
      promoIcon = 'list'
      promoTitle = 'Promo'
      break
    }
    console.log("Price Info Label",priceInfoLabel)
    this.appPages = [
      {
        title: priceInfoLabel,
        url: pricelisturl,
        icon: 'list'
      },
      {
        title: 'Pengajuan Harga',
        url: '/pricelist-nego',
        icon: 'list'
      },
      {
        title: 'Histori Pengajuan Harga',
        url: '/quotation-lists',
        icon: 'list'
      },{
        title: promoTitle,
        url:promo,
        icon: promoIcon
      }
    ];
  }
  toggleMenu(){
    console.log("toggle menu invoked")
    this.menuController.toggle("left")
    this.menuController.close("menuId")
  }
}
