import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3Page } from './ex3.page';

describe('Ex3Page', () => {
  let component: Ex3Page;
  let fixture: ComponentFixture<Ex3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
