import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttabsPage } from './contacttabs.page';

describe('ContacttabsPage', () => {
  let component: ContacttabsPage;
  let fixture: ComponentFixture<ContacttabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacttabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacttabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
