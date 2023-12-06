import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilProfComponent } from './accueil-prof.component';

describe('AccueilProfComponent', () => {
  let component: AccueilProfComponent;
  let fixture: ComponentFixture<AccueilProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilProfComponent]
    });
    fixture = TestBed.createComponent(AccueilProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
