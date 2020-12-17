import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoEventComponent } from './promo-event.component';

describe('PromoEventComponent', () => {
  let component: PromoEventComponent;
  let fixture: ComponentFixture<PromoEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
