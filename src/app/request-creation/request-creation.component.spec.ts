import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCreationComponent } from './request-creation.component';

describe('RequestCreationComponent', () => {
  let component: RequestCreationComponent;
  let fixture: ComponentFixture<RequestCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
