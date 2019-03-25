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
}
capacities
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
  getCapacities(){
    console.log("get capacity OBJ",this.obj)
    this.priceList.getcapacities(
      {
        category_id:this.obj.category,
        service_id:this.obj.servicename,
        subservice_id:this.obj.subservice_id,
        media_id:this.obj.media_id
      },result => {
      this.capacities = result
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
