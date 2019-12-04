import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePricesComponent } from './house-prices.component';

describe('HousePricesComponent', () => {
  let component: HousePricesComponent;
  let fixture: ComponentFixture<HousePricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
