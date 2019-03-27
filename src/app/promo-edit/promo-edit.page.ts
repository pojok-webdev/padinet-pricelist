import { Component, OnInit } from '@angular/core';
import { PromoService } from '../promo.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-promo-edit',
  templateUrl: './promo-edit.page.html',
  styleUrls: ['./promo-edit.page.scss'],
})
export class PromoEditPage implements OnInit {
  obj = {
    name:'',
    termcondition:'',
    startdate:'',
    enddate:'',
    flyer:''
  }
  uploadImage
  constructor(
    private promoService: PromoService,
    private router: ActivatedRoute,
    private imageService: ImageService
  ) {
    let _id = this.router.snapshot.paramMap.get("id")
    this.promoService.get({id:_id},result => {
      this.obj = result[0]
      var byteArray = new Uint8Array(result[0].flyer.data)
      var blob = new Blob([byteArray],{type:'image/jpeg'})
      this.imageService.createImageFromBlob(blob,result => {
        this.uploadImage = result
        this.obj.flyer = result
      })
    })
  }
  ngOnInit() {
  }
  update(obj){
    this.promoService.update(obj,result => {
      console.log("Promo updated",result)
    })
  }
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
}
