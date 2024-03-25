import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanRequestsListComponent } from './dean-requests-list.component';

describe('DeanRequestsListComponent', () => {
  let component: DeanRequestsListComponent;
  let fixture: ComponentFixture<DeanRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeanRequestsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeanRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
