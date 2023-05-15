import { Component } from '@angular/core';
import { WheaterCurrent, WheaterInformation } from './interfaces/wheater.interfaces';
import { WheaterService } from './services/wheater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  currentWheater: WheaterCurrent | undefined;
  wheaterDetail: WheaterInformation | undefined;
  latitude: number = 40.7127753;
  longitude: number = -74.0059728;
  location: string = 'Nueva York, EE. UU.';
  
  constructor(private weatherService: WheaterService) {
    weatherService.getWheater(this.latitude, this.longitude).subscribe({
      next: (response: any) => {
        console.log(response);
        this.currentWheater = response.current;
        this.wheaterDetail = this.currentWheater?.weather[0];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getAddress(place: any) {
    this.latitude = place.geometry.location.lat();
    this.longitude = place.geometry.location.lng();
    this.location = place.formatted_address;
    console.log(place.formatted_address);
    this.getWheater();
  }

  getWheater() {
    this.weatherService.getWheater(this.latitude, this.longitude).subscribe({
      next: (response: any) => {
        console.log(response);
        this.currentWheater = response.current;
        this.wheaterDetail = this.currentWheater?.weather[0];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
