import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista1Page } from './lista1.page';

describe('Lista1Page', () => {
  let component: Lista1Page;
  let fixture: ComponentFixture<Lista1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lista1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lista1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
