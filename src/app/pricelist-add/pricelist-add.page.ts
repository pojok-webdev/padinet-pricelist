import { Component, OnInit } from '@angular/core';
import { PricelistService } from '../pricelist.service';
import { CategoryService } from '../category.service';
import { ServiceService } from '../service.service';

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
  services
  servicenames
  subservices
  capactities
  hideSubService
  hideMedia
  constructor(
    private priceList: PricelistService,
    private category: CategoryService,
    private serviceService: ServiceService
  ) {
    this.category.gets(result => {
      this.categories = result
    })
    this.hideMedia = true
    this.hideSubService = true
  }
  getCategories(){
    this.serviceService.getCategories(res => {
      this.categories = res
    })
  }
  populateServices(){

    if(parseInt(this.obj.category)===2){
      this.hideSubService = false
      this.hideMedia = false
    }
    this.serviceService.getServicesbyCategory({category_id:this.obj.category},result => {
      this.services = result
    })
  }
  populateSubServices(){
    this.serviceService.getSubServices({service_id:this.obj.servicename},result => {
      this.subservices = result
    })
  }
  populateCapacities(){
    //this.serviceService.getCapacities()
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
