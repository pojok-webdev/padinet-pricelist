import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelistsPage } from './pricelists.page';

describe('PricelistsPage', () => {
  let component: PricelistsPage;
  let fixture: ComponentFixture<PricelistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelistsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricelistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
