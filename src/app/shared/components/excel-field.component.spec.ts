import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelFieldComponent } from './excel-field.component';

describe('ExcelFieldComponent', () => {
  let component: ExcelFieldComponent;
  let fixture: ComponentFixture<ExcelFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
