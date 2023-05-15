import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvRatioComponent } from './uv-ratio.component';

describe('UvRatioComponent', () => {
  let component: UvRatioComponent;
  let fixture: ComponentFixture<UvRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
