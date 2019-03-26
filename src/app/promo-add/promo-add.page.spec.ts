import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoAddPage } from './promo-add.page';

describe('PromoAddPage', () => {
  let component: PromoAddPage;
  let fixture: ComponentFixture<PromoAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
