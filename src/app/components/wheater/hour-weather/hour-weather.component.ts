import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hour-weather',
  templateUrl: './hour-weather.component.html',
  styleUrls: ['./hour-weather.component.sass']
})
export class HourWeatherComponent implements OnInit {

  @Input() hour: any = {};

  url: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    this.url = `http://openweathermap.org/img/wn/${this.hour?.weather[0].icon}@2x.png`
  }

}
