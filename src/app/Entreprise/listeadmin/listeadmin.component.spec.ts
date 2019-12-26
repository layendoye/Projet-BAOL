import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeadminComponent } from './listeadmin.component';

describe('ListeadminComponent', () => {
  let component: ListeadminComponent;
  let fixture: ComponentFixture<ListeadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
