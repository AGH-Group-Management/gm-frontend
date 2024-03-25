import { Component, ViewChild } from '@angular/core';
import {
  MatSelect,
  MatFormField,
  MatLabel,
  MatOption,
  MatSelectChange,
} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CourseStudentTableComponent } from '../course-student-table/course-student-table.component';
import { Course } from './courses-assigned.model';
import { semestersData, semester1Data, semester2Data } from './mock-data';

@Component({
  selector: 'app-courses-assigned',
  standalone: true,
  imports: [
    MatSelect,
    MatFormField,
    MatLabel,
    MatOption,
    CommonModule,
    MatAccordion,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CourseStudentTableComponent,
  ],
  templateUrl: './courses-assigned.component.html',
  styleUrl: './courses-assigned.component.scss',
})
export class CoursesAssignedComponent {
  courses: Course[] = semester1Data;
  selectedSemester = 1;
  semesters = semestersData;

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  selectSemester(event: MatSelectChange) {
    this.selectedSemester = event.value;
    this.courses = this.selectedSemester === 1 ? semester1Data : semester2Data;
  }
}
