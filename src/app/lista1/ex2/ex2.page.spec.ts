import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2Page } from './ex2.page';

describe('Ex2Page', () => {
  let component: Ex2Page;
  let fixture: ComponentFixture<Ex2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
