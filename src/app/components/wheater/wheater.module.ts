import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeWeatherComponent } from './time-weather/time-weather.component';
import { WeatherDuringDayComponent } from './weather-during-day/weather-during-day.component';
import { WeatherDuringWeeklyComponent } from './weather-during-weekly/weather-during-weekly.component';
import { UvRatioComponent } from './uv-ratio/uv-ratio.component';
import { SunsetComponent } from './sunset/sunset.component';
import { HumidityComponent } from './humidity/humidity.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { PressureComponent } from './pressure/pressure.component';



@NgModule({
  declarations: [
    TimeWeatherComponent,
    WeatherDuringDayComponent,
    WeatherDuringWeeklyComponent,
    UvRatioComponent,
    SunsetComponent,
    HumidityComponent,
    VisibilityComponent,
    PressureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeWeatherComponent,
    WeatherDuringDayComponent,
    WeatherDuringWeeklyComponent,
    UvRatioComponent,
    SunsetComponent,
    HumidityComponent,
    VisibilityComponent
  ]
})
export class WheaterModule { }
