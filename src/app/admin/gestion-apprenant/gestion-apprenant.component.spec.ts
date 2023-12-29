import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionApprenantComponent } from './gestion-apprenant.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('GestionApprenantComponent', () => {
  let component: GestionApprenantComponent;
  let fixture: ComponentFixture<GestionApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionApprenantComponent],
      imports :[RouterTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(GestionApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
