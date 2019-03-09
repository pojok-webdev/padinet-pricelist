import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';

@Component({
  selector: 'app-pricelist-add',
  templateUrl: './pricelist-add.page.html',
  styleUrls: ['./pricelist-add.page.scss'],
})
export class PricelistAddPage implements OnInit {
  obj = {
    price:0,servicename:'',capacity:''
  }
  constructor(private priceList: PricelistService) { }
  save(obj){
    this.priceList.save(obj,result => {
      console.log("Result",result)
      window.location.href = "/pricelists"
    })
  }

  ngOnInit() {
  }

}
