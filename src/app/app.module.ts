import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicModule } from './components/basic/basic.module';
import { WheaterModule } from './components/wheater/wheater.module';
import { GoogleMapsComponentsModule } from './components/google-maps-components/google-maps-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WheaterModule,
    BasicModule,
    HttpClientModule,
    GoogleMapsComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
