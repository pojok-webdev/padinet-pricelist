import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PricelistAddPage } from './pricelist-add.page';

const routes: Routes = [
  {
    path: '',
    component: PricelistAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PricelistAddPage]
})
export class PricelistAddPageModule {}
