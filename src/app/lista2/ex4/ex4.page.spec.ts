import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Page } from './ex4.page';

describe('Ex4Page', () => {
  let component: Ex4Page;
  let fixture: ComponentFixture<Ex4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
