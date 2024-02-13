import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmarkerModalComponent } from '../addmarker-modal/addmarker-modal.component';
import { DeleteMarkerModalComponent } from '../delete-marker-modal/delete-marker-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  addPropertyDialog() {
    this.dialog.open(AddmarkerModalComponent);
  }
  deletePropertyDialog() {
    this.dialog.open(DeleteMarkerModalComponent);
  }
}
