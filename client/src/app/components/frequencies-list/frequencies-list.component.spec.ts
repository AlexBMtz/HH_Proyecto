import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenciesListComponent } from './frequencies-list.component';

describe('FrequenciesListComponent', () => {
  let component: FrequenciesListComponent;
  let fixture: ComponentFixture<FrequenciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequenciesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
