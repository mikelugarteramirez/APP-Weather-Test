import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-time-weather',
  templateUrl: './time-weather.component.html',
  styleUrls: ['./time-weather.component.sass']
})
export class TimeWeatherComponent implements OnInit {

  @Input() temp: string | number | undefined = '';
  @Input() tempMax: string | number | undefined = '';
  @Input() tempMin: string | number | undefined = '';
  @Input() time: any  = 0;
  @Input() geolocation: string | number | undefined = '';
  @Input() weather: string | number | undefined = '';
  @Input() timezone: string = '';
  @Input() urlImage: string | undefined = '';
  
  timer: string = '';
  url: string = '';



  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    if(changes.time){
      changes.time.currentValue;
      this.startTime();
    }
    this.url = `http://openweathermap.org/img/wn/${this.urlImage}@2x.png`
  }

  startTime() {
    this.timer = moment.tz(this.timezone).format('hh:mm:ss a');
    timer(1000).subscribe(n => this.startTime());
  }

}
