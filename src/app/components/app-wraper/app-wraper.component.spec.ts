import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWraperComponent } from './app-wraper.component';

describe('AppWraperComponent', () => {
  let component: AppWraperComponent;
  let fixture: ComponentFixture<AppWraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppWraperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
