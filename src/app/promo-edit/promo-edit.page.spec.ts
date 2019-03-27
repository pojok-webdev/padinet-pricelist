import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoEditPage } from './promo-edit.page';

describe('PromoEditPage', () => {
  let component: PromoEditPage;
  let fixture: ComponentFixture<PromoEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
