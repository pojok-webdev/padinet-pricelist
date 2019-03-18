import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotDetailPage } from './quot-detail.page';

describe('QuotDetailPage', () => {
  let component: QuotDetailPage;
  let fixture: ComponentFixture<QuotDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
