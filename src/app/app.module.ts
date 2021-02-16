import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcompComponent } from './components/testcomp/testcomp.component';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { AweSectionOneComponent } from './components/awe-section-one/awe-section-one.component';
import { AweSectionTwoComponent } from './components/awe-section-two/awe-section-two.component';
import { AweSectionThreeComponent } from './components/awe-section-three/awe-section-three.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { PopupAweOneComponent } from './components/popup-awe-one/popup-awe-one.component';
import { PopupAddCartComponent } from './components/popup-add-cart/popup-add-cart.component';
import { PopupCartComponent } from './components/popup-cart/popup-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    MenuTopComponent,
    HeaderComponent,
    HeaderMenuComponent,
    AweSectionOneComponent,
    AweSectionTwoComponent,
    AweSectionThreeComponent,
    FooterComponent,
    AddToCartComponent,
    PopupAweOneComponent,
    PopupAddCartComponent,
    PopupCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
