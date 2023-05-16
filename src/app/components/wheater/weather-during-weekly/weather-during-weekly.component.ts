import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-during-weekly',
  templateUrl: './weather-during-weekly.component.html',
  styleUrls: ['./weather-during-weekly.component.sass']
})
export class WeatherDuringWeeklyComponent implements OnInit {

  @Input() daily: any[] = [];
  @Output() setOpenInformation: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  resendInformation(day: any) {
    this.setOpenInformation.emit(day)
  }

}
