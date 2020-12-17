import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationselectionComponent } from './locationselection.component';

describe('LocationselectionComponent', () => {
  let component: LocationselectionComponent;
  let fixture: ComponentFixture<LocationselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
