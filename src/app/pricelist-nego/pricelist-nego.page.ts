import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CustomsService } from '../customs.service';

@Component({
  selector: 'app-pricelist-nego',
  templateUrl: './pricelist-nego.page.html',
  styleUrls: ['./pricelist-nego.page.scss'],
})
export class PricelistNegoPage implements OnInit {
  obj = {
    branch:'',
    category:'',
    service:'',
    media:'',
    capacity:'',
    customprice:0,
    clientpic:'',
    clienttlp:'',
    clientpichp:'',
    clientemail:'',
    clientaddress:'',
    activationtarget:'',
    img:''
  }
  services
  capacities
  prices
  constructor(
    private categoryservice: CategoryService,
    private custom: CustomsService
  ) { }

  ngOnInit() {
  }
  changeCategory(obj){
    this.categoryservice.servicenamegetbycatgory(obj,result => {
      this.services = result
    })
  }
  changeCapacity(obj){
    this.categoryservice.getcapacities(obj,result => {
      console.log("getcapacities",result)
      this.capacities = result
    })
  }
  getPrices(obj){
    this.categoryservice.getprices(obj,result => {
      this.prices = result
    })
  }
  save(obj){
    console.log("OBJ to save",obj)
    this.custom.save(obj,result => {
      console.log("Result",result)
      window.location.href = '/quotation-lists'
    })
  }
}
