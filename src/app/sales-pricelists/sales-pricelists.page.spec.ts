import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPricelistsPage } from './sales-pricelists.page';

describe('SalesPricelistsPage', () => {
  let component: SalesPricelistsPage;
  let fixture: ComponentFixture<SalesPricelistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPricelistsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPricelistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
