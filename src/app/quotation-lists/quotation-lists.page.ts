import { Component, OnInit } from '@angular/core';
import { CustomsService } from '../customs.service';

@Component({
  selector: 'app-quotation-lists',
  templateUrl: './quotation-lists.page.html',
  styleUrls: ['./quotation-lists.page.scss'],
})
export class QuotationListsPage implements OnInit {
  quotations
  constructor(private custom: CustomsService) {
    this.custom.gets(result => {
      this.quotations = result
    })
  }

  ngOnInit() {
  }

}
