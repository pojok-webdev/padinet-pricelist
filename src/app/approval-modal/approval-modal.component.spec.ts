import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalModalPage } from './approval-modal.page';

describe('ApprovalModalPage', () => {
  let component: ApprovalModalPage;
  let fixture: ComponentFixture<ApprovalModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
