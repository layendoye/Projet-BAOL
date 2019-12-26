import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewventeComponent } from './newvente.component';

describe('NewventeComponent', () => {
  let component: NewventeComponent;
  let fixture: ComponentFixture<NewventeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewventeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
