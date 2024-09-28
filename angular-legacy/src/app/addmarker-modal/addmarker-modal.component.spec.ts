import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmarkerModalComponent } from './addmarker-modal.component';

describe('AddmarkerModalComponent', () => {
  let component: AddmarkerModalComponent;
  let fixture: ComponentFixture<AddmarkerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmarkerModalComponent]
    });
    fixture = TestBed.createComponent(AddmarkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
