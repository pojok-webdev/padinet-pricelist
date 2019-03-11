import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricelist-nego',
  templateUrl: './pricelist-nego.page.html',
  styleUrls: ['./pricelist-nego.page.scss'],
})
export class PricelistNegoPage implements OnInit {
  obj = {
    branch:'',category:'',service:'',media:'',capacity:'',proposedprice:0
  }
  services = [
    {id:"1",name:'IBB'},{id:"2",name:'Cluster'},{id:"3",name:'Oryza'},{id:"4",name:'SBI'}
  ]
  constructor() { }

  ngOnInit() {
  }
  changeCategory($event){
    switch($event.target.value){
      case '1':
      console.log("satu")
      this.services = [
        {id:"1",name:'IBB'},{id:"2",name:'Cluster'},{id:"3",name:'Oryza'},{id:"4",name:'SBI'}
      ]
          break
      case '2':
      console.log("duo")
      this.services = [
        {id:"1",name:'Domestic IIX'},{id:"2",name:'Domestic Local Loop'},{id:"3",name:'International Padi MIX'},{id:"4",name:'International Enterprise'}
      ]
      break
      case '3':
      console.log("tiga")
      this.services = [
        {id:"1",name:'IBB'},{id:"2",name:'Cluster'},{id:"3",name:'Oryza'},{id:"4",name:'SBI'}
      ]
      break
    }
  }
  changeCapacity($event){}
}
