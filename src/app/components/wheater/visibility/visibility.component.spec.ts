import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityComponent } from './visibility.component';

describe('VisibilityComponent', () => {
  let component: VisibilityComponent;
  let fixture: ComponentFixture<VisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
