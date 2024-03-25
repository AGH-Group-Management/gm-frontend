import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import Przedmioty from "./subjects.json"
import { Subject } from './subject';

@Component({
  selector: 'app-student-preferences',
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: './student-preferences.component.html',
  styleUrl: './student-preferences.component.scss'
})
export class StudentPreferencesComponent implements OnInit {
  przedmioty: Subject[] = [];
  notRequiredSubjects: Subject[] = [];

  constructor() {
    this.przedmioty = Przedmioty;
  }

  ngOnInit(): void {
    this.notRequiredSubjects = this.przedmioty.filter((subject: Subject) => !subject.isrequired);
  }
}
