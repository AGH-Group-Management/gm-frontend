import {
  Component,
  ViewChild,
  Input,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { MatSelect, MatFormField } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Course, Student } from '../courses-assigned/courses-assigned.model';

@Component({
  selector: 'app-course-student-table',
  standalone: true,
  imports: [
    MatSelect,
    MatFormField,
    MatTableModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSort,
    MatSortModule,
    MatPaginator,
    MatPaginatorModule,
  ],
  templateUrl: './course-student-table.component.html',
  styleUrl: './course-student-table.component.scss',
})
export class CourseStudentTableComponent implements OnInit, AfterViewInit {
  @Input() courseData!: Course;
  @Input() index!: number;
  columnNames: string[] = [
    'Identyfikator',
    'Numer indeksu',
    'Imię',
    'Nazwisko',
  ];
  studentProperties: string[] = ['id', 'index', 'name', 'surname'];
  tableData!: MatTableDataSource<Student>;

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.tableData = new MatTableDataSource<Student>(this.courseData.students);
  }

  ngAfterViewInit(): void {
    this.sort.disableClear = true;
    this.tableData.sort = this.sort;
    this.tableData.paginator = this.paginator;
  }

  protected applyFilter(event: Event): void {
    this.tableData.filter = (event.target as HTMLTextAreaElement).value
      .trim()
      .toLowerCase();
  }
}
