import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorsFormComponent } from './coordinators-form.component';

describe('CoordinatorsFormComponent', () => {
  let component: CoordinatorsFormComponent;
  let fixture: ComponentFixture<CoordinatorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
