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
    private mapService: MapService,
    private addmarkerModalComponent: AddmarkerModalComponent,
    private mapDataService: MapDataService,
    private dialogService: DialogService
  ) {
    this.mapDataService.connectionLost$.subscribe((status) => {
      this.connectionLost = status;
    });
  }
  openModal() {
    this.dialogService.openDialog();
  }
  addMarker() {
    this.mapService.addMarker(-96.9289, 32.6194);
  }
}
