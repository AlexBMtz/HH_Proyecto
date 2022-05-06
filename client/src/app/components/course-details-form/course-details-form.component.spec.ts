import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsFormComponent } from './course-details-form.component';

describe('CourseDetailsFormComponent', () => {
  let component: CourseDetailsFormComponent;
  let fixture: ComponentFixture<CourseDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
