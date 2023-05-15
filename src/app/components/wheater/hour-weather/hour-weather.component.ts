import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hour-weather',
  templateUrl: './hour-weather.component.html',
  styleUrls: ['./hour-weather.component.sass']
})
export class HourWeatherComponent implements OnInit {

  @Input() hour: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
