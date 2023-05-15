import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {
  constructor(private http: HttpClient) {}

  getWheater(lat: number = 33.44, lon: number = -94.04) {
    return this.http.get(`${environment.baseUrl}/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${environment.apiKey}`)
  }

}
