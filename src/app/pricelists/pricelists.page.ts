import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';

@Component({
  selector: 'app-pricelists',
  templateUrl: './pricelists.page.html',
  styleUrls: ['./pricelists.page.scss'],
})
export class PricelistsPage implements OnInit {
objs
  constructor(private priceList:PricelistService) {
    this.priceList.gets(result=>{
      console.log("Result",result)
      this.objs = result
    })
  }

  ngOnInit() {
  }

}
