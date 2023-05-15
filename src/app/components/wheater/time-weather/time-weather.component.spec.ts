import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWeatherComponent } from './time-weather.component';

describe('TimeWeatherComponent', () => {
  let component: TimeWeatherComponent;
  let fixture: ComponentFixture<TimeWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
