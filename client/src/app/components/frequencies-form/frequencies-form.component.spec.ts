import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenciesFormComponent } from './frequencies-form.component';

describe('FrequenciesFormComponent', () => {
  let component: FrequenciesFormComponent;
  let fixture: ComponentFixture<FrequenciesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequenciesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequenciesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
