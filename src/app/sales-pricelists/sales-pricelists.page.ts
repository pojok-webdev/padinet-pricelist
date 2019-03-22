import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

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
  constructor(
    private serviceService: ServiceService
  ) {
    this.serviceService.getServices(res => {
      this.services = res
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
