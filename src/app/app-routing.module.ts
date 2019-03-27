import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quotation-lists',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'pricelists', loadChildren: './pricelists/pricelists.module#PricelistsPageModule' },
  { path: 'pricelist-add', loadChildren: './pricelist-add/pricelist-add.module#PricelistAddPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'pricelist-nego', loadChildren: './pricelist-nego/pricelist-nego.module#PricelistNegoPageModule' },
  { path: 'quotation-lists', loadChildren: './quotation-lists/quotation-lists.module#QuotationListsPageModule' },
  { path: 'promos', loadChildren: './promos/promos.module#PromosPageModule' },
  { path: 'sales-pricelists', loadChildren: './sales-pricelists/sales-pricelists.module#SalesPricelistsPageModule' },
  { path: 'promo-add', loadChildren: './promo-add/promo-add.module#PromoAddPageModule' },
  { path: 'promo-edit/:id', loadChildren: './promo-edit/promo-edit.module#PromoEditPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
