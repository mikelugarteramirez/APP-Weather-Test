import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.sass']
})
export class DayWeatherComponent implements OnInit {
  
  @Input() day: any = {};
  @Output() setOpenInformation: EventEmitter<any> = new EventEmitter();

  url: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    this.url = `http://openweathermap.org/img/wn/${this.day?.weather[0].icon}@2x.png`
  }

  clickInformation() {
    this.setOpenInformation.emit(this.day);
  }

}
