import { Component } from '@angular/core';
import { MapDataService } from '../services/map-data.service';

@Component({
  selector: 'app-delete-marker-modal',
  templateUrl: './delete-marker-modal.component.html',
  styleUrls: ['./delete-marker-modal.component.css'],
})
export class DeleteMarkerModalComponent {
  constructor(private mapDataService: MapDataService) {}
  formObj: any = {
    propertyId: '',
  };

  deleteLocation(formObj: any) {
    this.mapDataService.deleteMapData(formObj).subscribe(
      (response) => {
        response !== null
          ? alert('Property and marker deleted successfully!')
          : alert('Delete marker failed!');
        window.location.reload();
      },
      (error) => {
        console.error('Delete failed', error);
        alert('Delete failed!');
      }
    );
  }
}
