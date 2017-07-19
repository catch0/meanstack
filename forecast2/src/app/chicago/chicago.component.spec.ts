/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChicagoComponent } from './chicago.component';

describe('ChicagoComponent', () => {
  let component: ChicagoComponent;
  let fixture: ComponentFixture<ChicagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChicagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChicagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
