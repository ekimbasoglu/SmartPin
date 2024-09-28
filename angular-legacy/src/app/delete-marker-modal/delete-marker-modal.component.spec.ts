import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarkerModalComponent } from './delete-marker-modal.component';

describe('DeleteMarkerModalComponent', () => {
  let component: DeleteMarkerModalComponent;
  let fixture: ComponentFixture<DeleteMarkerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMarkerModalComponent]
    });
    fixture = TestBed.createComponent(DeleteMarkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
