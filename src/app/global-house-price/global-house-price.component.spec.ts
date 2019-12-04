import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHousePriceComponent } from './global-house-price.component';

describe('GlobalHousePriceComponent', () => {
  let component: GlobalHousePriceComponent;
  let fixture: ComponentFixture<GlobalHousePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalHousePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalHousePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
