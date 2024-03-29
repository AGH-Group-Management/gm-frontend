import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAssignedComponent } from './courses-assigned.component';

describe('CoursesAssignedComponent', () => {
  let component: CoursesAssignedComponent;
  let fixture: ComponentFixture<CoursesAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesAssignedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
