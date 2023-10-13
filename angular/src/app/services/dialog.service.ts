import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmarkerModalComponent } from '../addmarker-modal/addmarker-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddmarkerModalComponent);
  }
}
