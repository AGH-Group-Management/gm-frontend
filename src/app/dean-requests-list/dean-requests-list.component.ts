import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-dean-requests-list',
  standalone: true,
  imports: [
    MatPaginator, 
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ],
  templateUrl: './dean-requests-list.component.html',
  styleUrl: './dean-requests-list.component.scss'
})
export class DeanRequestsListComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'fullname', 'indexNo', 'requestTitle', 'requestType', 'date', 'status', 'actions'];
  dataSource = new MatTableDataSource<unknown>([]);

  @ViewChild('requestsTbSort') requestsTbSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Mock data (in future this will be fetched from the backend)
  data = [
    { id: 1, fullname: 'John Doe', indexNo: '405323', requestTitle: 'Prośba o zmianę przedmiotu', requestType: 'Zmiana przedmiotu', date: '2024-02-11', status: 'Oczekuje na odpowiedź'},
    { id: 2, fullname: 'Jane Smith', indexNo: '405324', requestTitle: 'Wniosek o urlop', requestType: 'Wniosek o urlop', date: '2024-02-12', status: 'Zaakceptowany'},
    { id: 3, fullname: 'Michael Johnson', indexNo: '405325', requestTitle: 'Błąd w systemie', requestType: 'Błąd w systemie', date: '2024-02-13', status: 'Odrzucony'},
    { id: 4, fullname: 'Emily Brown', indexNo: '405326', requestTitle: 'Prośba o zmianę przedmiotu', requestType: 'Zmiana przedmiotu', date: '2024-02-14', status: 'Oczekuje na odpowiedź'},
    { id: 5, fullname: 'David Wilson', indexNo: '405327', requestTitle: 'Wniosek o urlop', requestType: 'Wniosek o urlop', date: '2024-02-15', status: 'Oczekuje na odpowiedź'},
    { id: 6, fullname: 'Sophia Taylor', indexNo: '405328', requestTitle: 'Błąd w systemie', requestType: 'Błąd w systemie', date: '2024-02-16', status: 'Zaakceptowany'},
    { id: 7, fullname: 'James Martinez', indexNo: '405329', requestTitle: 'Prośba o zmianę przedmiotu', requestType: 'Zmiana przedmiotu', date: '2024-02-17', status: 'Oczekuje na odpowiedź'},
    { id: 8, fullname: 'Olivia Anderson', indexNo: '405330', requestTitle: 'Wniosek o urlop', requestType: 'Wniosek o urlop', date: '2024-02-18', status: 'Oczekuje na odpowiedź'},
    { id: 9, fullname: 'Daniel Garcia', indexNo: '405331', requestTitle: 'Błąd w systemie', requestType: 'Błąd w systemie', date: '2024-02-19', status: 'Odrzucony'},
    { id: 10, fullname: 'Emma Hernandez', indexNo: '405332', requestTitle: 'Prośba o zmianę przedmiotu', requestType: 'Zmiana przedmiotu', date: '2024-02-20', status: 'Zaakceptowany'},
    { id: 11, fullname: 'Alexander Martinez', indexNo: '405333', requestTitle: 'Wniosek o urlop', requestType: 'Wniosek o urlop', date: '2024-02-21', status: 'Zaakceptowany'},
    { id: 12, fullname: 'Isabella Robinson', indexNo: '405334', requestTitle: 'Błąd w systemie', requestType: 'Błąd w systemie', date: '2024-02-22', status: 'Oczekuje na odpowiedź'},
    { id: 13, fullname: 'Ethan Wright', indexNo: '405335', requestTitle: 'Prośba o zmianę przedmiotu', requestType: 'Zmiana przedmiotu', date: '2024-02-23', status: 'Oczekuje na odpowiedź'},
    { id: 14, fullname: 'Mia Lewis', indexNo: '405336', requestTitle: 'Wniosek o urlop', requestType: 'Wniosek o urlop', date: '2024-02-24', status: 'Oczekuje na odpowiedź'},
    { id: 15, fullname: 'Benjamin Walker', indexNo: '405337', requestTitle: 'Błąd w systemie', requestType: 'Błąd w systemie', date: '2024-02-25', status: 'Zaakceptowany'},
    { id: 16, fullname: 'Ava Hall', indexNo: '405338', requestTitle: 'Prośba o zmianę przedmiotu', requestType: 'Zmiana przedmiotu', date: '2024-02-26', status: 'Zaakceptowany'},
    { id: 17, fullname: 'William Young', indexNo: '405339', requestTitle: 'Wniosek o urlop', requestType: 'Wniosek o urlop', date: '2024-02-27', status: 'Oczekuje na odpowiedź'},
    { id: 18, fullname: 'Sofia Perez', indexNo: '405340', requestTitle: 'Błąd w systemie', requestType: 'Błąd w systemie', date: '2024-02-28', status: 'Odrzucony'},
    { id: 19, fullname: 'Michael Nguyen', indexNo: '405341', requestTitle: 'Prośba o zmianę przedmiotu', requestType: 'Zmiana przedmiotu', date: '2024-02-29', status: 'Oczekuje na odpowiedź'},
    { id: 20, fullname: 'Victoria King', indexNo: '405342', requestTitle: 'Wniosek o urlop', requestType: 'Wniosek o urlop', date: '2024-03-01', status: 'Zaakceptowany'}
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<unknown>(this.data);
    this.requestsTbSort.disableClear = true;
    this.dataSource.sort = this.requestsTbSort;
    this.dataSource.paginator = this.paginator;
  }

  protected acceptRequest(id: number): void {
    console.log(`Accepted request with id: ${id}`);
  }

  protected rejectRequest(id: number): void {
    console.log(`Rejected request with id: ${id}`);
  }

  protected applyFilter(event: Event): void {
    this.dataSource.filter = (event.target as HTMLTextAreaElement).value.trim().toLowerCase()
  }
}
