import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleChooserPage } from './role-chooser.page';

describe('RoleChooserPage', () => {
  let component: RoleChooserPage;
  let fixture: ComponentFixture<RoleChooserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleChooserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
