import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesPricelistsPage } from './sales-pricelists.page';

const routes: Routes = [
  {
    path: '',
    component: SalesPricelistsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesPricelistsPage]
})
export class SalesPricelistsPageModule {}
