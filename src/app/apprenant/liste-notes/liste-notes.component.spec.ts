import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNotesComponent } from './liste-notes.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListeNotesComponent', () => {
  let component: ListeNotesComponent;
  let fixture: ComponentFixture<ListeNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeNotesComponent],
      imports :[RouterTestingModule]
    });
    fixture = TestBed.createComponent(ListeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
