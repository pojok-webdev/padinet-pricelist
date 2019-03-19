import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  public resizeImage(url,width, callback){
    console.log("URL",url)
    var canvas = document.createElement("canvas");
    var MAX_WIDTH_ALLOWED = width;
    var MAX_HEIGHT = 0;
    canvas.width = width;
    var img = new Image();
    img.onload = function(){
      console.log("onload invoked")
      MAX_HEIGHT = img.height * MAX_WIDTH_ALLOWED / img.width;
      canvas.height = MAX_HEIGHT;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, MAX_WIDTH_ALLOWED, MAX_HEIGHT);
      callback(canvas.toDataURL("image/jpeg"));
    }
    img.src = url;
  }

  createImageFromBlob(image: Blob,callback) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
    }, false);
    reader.onloadend = (e)=>{
      callback(reader.result)
    }
    if (image) {
       reader.readAsText(image);
    }
  }

}
