import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordAdminComponent } from './dashbord-admin.component';
import { FormsModule } from '@angular/forms';

describe('DashbordAdminComponent', () => {
  let component: DashbordAdminComponent;
  let fixture: ComponentFixture<DashbordAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordAdminComponent],
      imports : [FormsModule]
    });
    fixture = TestBed.createComponent(DashbordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
