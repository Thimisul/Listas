import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtividadePage } from './modal-atividade.page';

describe('ModalAtividadePage', () => {
  let component: ModalAtividadePage;
  let fixture: ComponentFixture<ModalAtividadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAtividadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
