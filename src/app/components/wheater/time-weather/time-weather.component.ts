import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-weather',
  templateUrl: './time-weather.component.html',
  styleUrls: ['./time-weather.component.sass']
})
export class TimeWeatherComponent implements OnInit {

  @Input() temp: string | number | undefined = '';
  @Input() tempMax: string | number | undefined = '';
  @Input() tempMin: string | number | undefined = '';
  @Input() time: string | number | undefined = '';
  @Input() geolocation: string | number | undefined = '';
  @Input() weather: string | number | undefined = '';

  constructor() {}

  ngOnInit(): void {
  }

}
