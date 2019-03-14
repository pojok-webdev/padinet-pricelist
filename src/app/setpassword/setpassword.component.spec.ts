import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpasswordPage } from './setpassword.page';

describe('SetpasswordPage', () => {
  let component: SetpasswordPage;
  let fixture: ComponentFixture<SetpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
