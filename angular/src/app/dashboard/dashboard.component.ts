import { Component } from '@angular/core';
import { MapService } from '../services/mapService';
import { AddmarkerModalComponent } from '../addmarker-modal/addmarker-modal.component';
import { MapDataService } from '../services/map-data.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // define connectionLost variable based on the MapDataService
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
