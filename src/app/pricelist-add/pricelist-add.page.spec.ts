import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelistAddPage } from './pricelist-add.page';

describe('PricelistAddPage', () => {
  let component: PricelistAddPage;
  let fixture: ComponentFixture<PricelistAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelistAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricelistAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
