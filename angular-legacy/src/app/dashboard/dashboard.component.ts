import { Component } from '@angular/core';
import { MapDataService } from '../services/map-data.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  connectionLost = false;

  constructor(
    private mapDataService: MapDataService,
    private dialogService: DialogService
  ) {
    this.mapDataService.connectionLost$.subscribe((status) => {
      this.connectionLost = status;
    });
  }
  addPropertyDialog() {
    this.dialogService.addPropertyDialog();
  }
  deletePropertyDialog() {
    this.dialogService.deletePropertyDialog();
  }
}
