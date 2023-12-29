import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfComponent } from './gestion-prof.component';
import { FormsModule } from '@angular/forms';

describe('GestionProfComponent', () => {
  let component: GestionProfComponent;
  let fixture: ComponentFixture<GestionProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfComponent],
      imports : [FormsModule]
    });
    fixture = TestBed.createComponent(GestionProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
