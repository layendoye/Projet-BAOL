import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtransfertComponent } from './formtransfert.component';

describe('FormtransfertComponent', () => {
  let component: FormtransfertComponent;
  let fixture: ComponentFixture<FormtransfertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtransfertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
