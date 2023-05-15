import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunsetComponent } from './sunset.component';

describe('SunsetComponent', () => {
  let component: SunsetComponent;
  let fixture: ComponentFixture<SunsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
