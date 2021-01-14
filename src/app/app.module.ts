import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroBigComponent } from './hero-big/hero-big.component';
import { HeroSmallComponent } from './hero-small/hero-small.component';
import { ProductBtnComponent } from './product-btn/product-btn.component';
import { BlogBtnComponent } from './blog-btn/blog-btn.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductPageComponent } from './product-page/product-page.component';
import { SafelineComponent } from './safeline/safeline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroBigComponent,
    HeroSmallComponent,
    ProductBtnComponent,
    BlogBtnComponent,
    HomeComponent,
    FooterComponent,
    ProductPageComponent,
    SafelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
