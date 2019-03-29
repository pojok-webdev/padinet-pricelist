import { Component, OnInit } from '@angular/core';
import { CustomsService } from '../customs.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {
  obj = {
    name:'',_img:''
  }
  constructor(
    private customService: CustomsService,
    private router: ActivatedRoute,
    private imageService: ImageService
    ) {
      let _id = this.router.snapshot.paramMap.get("id")
      console.log("_ID",_id)
      this.customService.getById({id:_id}, result => {
        console.log("RESULT",result)
        this.obj = result[0]
        var byteArray = new Uint8Array(result[0].img.data)
        var blob = new Blob([byteArray],{type:'image/jpeg'})
        this.imageService.createImageFromBlob(blob, result => {
          this.obj._img = result
        })
      })
    }

  ngOnInit() {
  }
  setApprove(obj){
    let _id = this.router.snapshot.paramMap.get("id")
    this.customService.setApprove({id:_id,approved:'1'}, result => {
      console.log("setApprove",result)
    })
  }
}
