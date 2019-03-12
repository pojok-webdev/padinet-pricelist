import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-pricelist-add',
  templateUrl: './pricelist-add.page.html',
  styleUrls: ['./pricelist-add.page.scss'],
})
export class PricelistAddPage implements OnInit {
  obj = {
    category_id:0,
    category:'',price:0,
    servicename_id:0,
    servicename:'',
    capacity_id:0,
    capacity:'',
    media_id:0
  }
  categories
  servicenames
  capactities
  constructor(
    private priceList: PricelistService,
    private category: CategoryService
  ) {
    this.category.gets(result => {
      this.categories = result
    })
  }
  populateServices(){
    switch(this.obj.category){
      case 'Dedicated':
      this.servicenames = [
        {name:'IIX'},{name:'Local Loop'},{name:'Padi Mix'},{name:'Enterprise'}
      ]
      break
      case 'Broadband':
      this.servicenames = [
        {name:'IBB'},{name:'Cluster'},{name:'Oryza'},{name:'SBI'}
      ]
      break
    }
  }
  getCapacities(){
    this.priceList.getcapacities(
      {
        category_id:this.obj.category,
        servicename_id:this.obj.servicename_id,
        media_id:this.obj.media_id
      },result => {
      this.capactities = result
    })
  }
  save(obj){
    this.priceList.save(obj,result => {
      console.log("Result",result)
      window.location.href = "/pricelists"
    })
  }

  ngOnInit() {
  }

}
