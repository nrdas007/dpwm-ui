import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCreationComponent } from './promo-creation.component';

describe('PromoCreationComponent', () => {
  let component: PromoCreationComponent;
  let fixture: ComponentFixture<PromoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
