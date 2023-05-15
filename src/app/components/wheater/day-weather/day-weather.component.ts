import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.sass']
})
export class DayWeatherComponent implements OnInit {
  
  @Input() day: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
