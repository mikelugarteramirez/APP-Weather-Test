import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-during-day',
  templateUrl: './weather-during-day.component.html',
  styleUrls: ['./weather-during-day.component.sass']
})
export class WeatherDuringDayComponent implements OnInit {

  @Input() hourly: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
