import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDuringWeeklyComponent } from './weather-during-weekly.component';

describe('WeatherDuringWeeklyComponent', () => {
  let component: WeatherDuringWeeklyComponent;
  let fixture: ComponentFixture<WeatherDuringWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDuringWeeklyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDuringWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
