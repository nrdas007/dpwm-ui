import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoselectionComponent } from './promoselection.component';

describe('PromoselectionComponent', () => {
  let component: PromoselectionComponent;
  let fixture: ComponentFixture<PromoselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
