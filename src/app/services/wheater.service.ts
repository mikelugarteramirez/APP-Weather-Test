import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {
  constructor(private http: HttpClient) {}

  public data$: BehaviorSubject<any> = new BehaviorSubject({
    currentWheater: {},
    wheaterDetail: {},
    hourly: [],
    daily: [],
    latitude: 40.7127753,
    longitude: -74.0059728,
    location: 'Nueva York, EE. UU.',
  });

  public getWheater(lat: number = 33.44, lon: number = -94.04) {
    return this.http.get(`${environment.baseUrl}/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${environment.apiKey}`)
  }

}
