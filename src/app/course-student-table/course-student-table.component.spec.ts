import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStudentTableComponent } from './course-student-table.component';

describe('CourseStudentTableComponent', () => {
  let component: CourseStudentTableComponent;
  let fixture: ComponentFixture<CourseStudentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseStudentTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseStudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
