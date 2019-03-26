import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';
import { ImageService } from '../image.service';
import { PromoService } from '../promo.service';

@Component({
  selector: 'app-promo-add',
  templateUrl: './promo-add.page.html',
  styleUrls: ['./promo-add.page.scss'],
})
export class PromoAddPage implements OnInit {
  uploadImage
  img
  createuser
  obj = {
    name:'',flyer:'',termcondition:'',startdate:'',enddate:'',user_id:0,createuser:''
  }
  constructor(
    private imageService: ImageService,
    private promoService: PromoService
  ) { }
  openFile(obj,event){
    console.log("Data",event.target)
    let that = this
    var input = event.target;
    var myElement = document.getElementById("img")
    //myElement.attributes["src"] = 
    var filereader = new FileReader();
    filereader.onload = function(){
      that.imageService.resizeImage(filereader.result,1600,res=>{
        //myElement.attributes["src"] = res
        obj.flyer = res
        that.uploadImage = res
        console.log("Res",res)
      })
  
    }
    filereader.readAsDataURL(input.files[0]);
  }
  save(obj){
    this.promoService.save(obj, result => {})
  }
  ngOnInit() {
  }

}
