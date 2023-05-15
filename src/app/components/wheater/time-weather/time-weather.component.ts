import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-weather',
  templateUrl: './time-weather.component.html',
  styleUrls: ['./time-weather.component.sass']
})
export class TimeWeatherComponent implements OnInit {

  @Input() temp: string | number = '';
  @Input() tempMax: string | number = '';
  @Input() tempMin: string | number = '';
  @Input() time: string | number = '';
  @Input() geolocation: string | number = '';
  @Input() weather: string | number = '';

  constructor() {}

  ngOnInit(): void {
  }

}
