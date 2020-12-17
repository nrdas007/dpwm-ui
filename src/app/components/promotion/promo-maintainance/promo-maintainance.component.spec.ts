import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoMaintainanceComponent } from './promo-maintainance.component';

describe('PromoMaintainanceComponent', () => {
  let component: PromoMaintainanceComponent;
  let fixture: ComponentFixture<PromoMaintainanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoMaintainanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
