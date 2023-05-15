import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDuringDayComponent } from './weather-during-day.component';

describe('WeatherDuringDayComponent', () => {
  let component: WeatherDuringDayComponent;
  let fixture: ComponentFixture<WeatherDuringDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDuringDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDuringDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
