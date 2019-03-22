import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PricelistUpdateComponent } from './pricelist-update/pricelist-update.component';
import { LoginComponent } from './login/login.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { QuotDetailComponent } from './quot-detail/quot-detail.component';
@NgModule({
  declarations: [
    ConfirmationComponent,
    PricelistUpdateComponent,
    LoginComponent,
    SetpasswordComponent,
    AppComponent,
    QuotDetailComponent
  ],
  entryComponents: [
    ConfirmationComponent,
    PricelistUpdateComponent,
    SetpasswordComponent,
    LoginComponent,
    QuotDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,AppComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
