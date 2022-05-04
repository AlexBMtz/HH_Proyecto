import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesFormComponent } from './schedules-form.component';

describe('SchedulesFormComponent', () => {
  let component: SchedulesFormComponent;
  let fixture: ComponentFixture<SchedulesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
