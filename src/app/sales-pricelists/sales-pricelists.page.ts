import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { PricelistService } from '../pricelist.service';

@Component({
  selector: 'app-sales-pricelists',
  templateUrl: './sales-pricelists.page.html',
  styleUrls: ['./sales-pricelists.page.scss'],
})
export class SalesPricelistsPage implements OnInit {
services
service
subServices
subService
subServicesLevel2
medias = [
  {id:1,name:'FO'},{id:2,name:'Wireless'},{id:3,name:'FO Backup Wireless'},{id:4,name:'FO Backup Wireless Plus'},
]
noSubservice = false
noSubserviceLevel2 = true
noMedia = true
categories
subservices
hideMedia
hideSubService
obj = {
  category_id:0,
  category:'',price:0,
  servicename_id:0,
  servicename:'',
  capacity_id:0,
  capacity:'',
  media_id:0,
  service_id:0,subservice_id:0,
  basicprice:0,normalprice:0,bottomprice:0,upperprice:0
}
capacities
prices
  constructor(
    private serviceService: ServiceService,
    private priceList: PricelistService
  ) {
    this.serviceService.getCategories(res => {
      this.categories = res
      this.hideMedia = true
      this.hideSubService = true
    })
  }
  getCategories(){
    this.serviceService.getCategories(res => {
      this.categories = res
    })
  }
  populateServices(){
    console.log("category_id",this.obj.category_id)
    if(this.obj.category_id == 2){
      this.hideSubService = false
      this.hideMedia = false
    }
    this.serviceService.getServicesbyCategory({category_id:this.obj.category_id},result => {
      this.services = result
    })
  }
  populateSubServices(){
    this.serviceService.getSubServices({service_id:this.obj.service_id},result => {
      this.subservices = result
    })
  }
  getCapacities(){
    console.log("get capacity OBJ",this.obj)
    this.priceList.getcapacities(
      {
        category_id:this.obj.category_id,
        service_id:this.obj.service_id,
        subservice_id:this.obj.subservice_id,
        media_id:this.obj.media_id
      },result => {
      this.capacities = result
    })
  }
  getPrices(){
    console.log('getPrices invoked')
    this.priceList.getPrices(this.obj, result => {
      console.log("getPrices RESULT",result)
      console.log('OBJ',this.obj)
      let res = result[0]
      this.obj.basicprice = res.basicprice
      this.obj.normalprice = res.normalprice
      this.obj.bottomprice = res.bottomprice
      this.obj.upperprice = res.upperprice
    })
  }
  serviceChange(event){
    let _service_id =  event.target.value
    this.subServices = [{service_id:_service_id,name:'-',id:0}]
    this.noSubserviceLevel2 = true
    this.noMedia = true
    this.serviceService.getSubServices({service_id:_service_id},result => {
      console.log("Subservices",result)
      this.noSubservice = false
      if(result.length===0){
        this.noSubservice = true
      }
      this.subServices = result
    })
  }
  subServiceChange(event){
    let _subservice_id = event.target.value
    this.serviceService.getSubServicesLevel2({subservice_id:_subservice_id},result => {
      this.noSubserviceLevel2 = false
      this.noMedia = false
      if(result.length === 0){
        this.noSubserviceLevel2 = true
        this.noMedia = true
      }
      this.subServicesLevel2 = result
    })
  }
  ngOnInit() {
  }

}
