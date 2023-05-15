import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-during-weekly',
  templateUrl: './weather-during-weekly.component.html',
  styleUrls: ['./weather-during-weekly.component.sass']
})
export class WeatherDuringWeeklyComponent implements OnInit {

  @Input() daily: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
