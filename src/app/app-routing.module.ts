import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  { path: 'pricelist-nego/:id', loadChildren: './pricelist-nego/pricelist-nego.module#PricelistNegoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
