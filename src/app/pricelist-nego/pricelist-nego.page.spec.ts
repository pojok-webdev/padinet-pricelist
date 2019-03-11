import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelistNegoPage } from './pricelist-nego.page';

describe('PricelistNegoPage', () => {
  let component: PricelistNegoPage;
  let fixture: ComponentFixture<PricelistNegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelistNegoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricelistNegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
