import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
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
import { PromoDetailComponent } from './promo-detail/promo-detail.component';
import { ApprovalPipe } from './approval.pipe';
import { ApprovalConfirmationComponent } from './approval-confirmation/approval-confirmation.component';
import { ApprovalModalComponent } from './approval-modal/approval-modal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
@NgModule({
  declarations: [
    ConfirmationComponent,
    PricelistUpdateComponent,
    PromoDetailComponent,
    LoginComponent,
    SetpasswordComponent,
    AppComponent,
    QuotDetailComponent,
    ApprovalConfirmationComponent,
    ApprovalModalComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    ApprovalPipe
  ],
  entryComponents: [
    ConfirmationComponent,
    PricelistUpdateComponent,
    PromoDetailComponent,
    SetpasswordComponent,
    LoginComponent,
    QuotDetailComponent,
    ApprovalConfirmationComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    ApprovalModalComponent
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
