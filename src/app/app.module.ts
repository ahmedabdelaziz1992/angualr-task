import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { SharedModule } from './shared/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
// Swiper
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
// Components
import { AppComponent } from './app.component';
import { BannerComponent } from './home/components/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './home/components/our-services/services.component';
import { ServiceComponent } from './home/components/our-services/components/service/service.component';
// Services
import { DataService } from './home/components/our-services/services/data.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    ServicesComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SwiperModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
