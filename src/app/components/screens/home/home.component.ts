import { Component, OnInit } from '@angular/core';
import { WheaterCurrent, WheaterInformation } from '../../../interfaces/wheater.interfaces';
import { WheaterService } from '../../../services/wheater.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent  {

  currentWheater: WheaterCurrent | undefined;
  wheaterDetail: WheaterInformation | undefined;
  hourly: any = [];
  daily: any = [];
  latitude: number = 40.7127753;
  longitude: number = -74.0059728;
  location: string = 'Nueva York, EE. UU.';
  timezone: string = 'America/New_York'
  
  constructor(public weatherService: WheaterService) {
    this.getWheater();
  }

  getAddress(place: any) {
    this.latitude = place.geometry.location.lat();
    this.longitude = place.geometry.location.lng();
    this.location = place.formatted_address;
    this.getWheater();
    
  }

  getWheater() {
    this.weatherService.getWheater(this.latitude, this.longitude).subscribe({
      next: (response: any) => {
        console.log(response);
        this.currentWheater = response.current;
        this.wheaterDetail = this.currentWheater?.weather[0];
        this.hourly = response.hourly;
        this.daily = response.daily;
        this.timezone = response.timezone;
        this.weatherService.data$.next({
          currentWheater : response.current,
          wheaterDetail : response?.current?.weather[0],
          hourly : response.hourly,
          daily : response.daily,
          location : this.location
        })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
