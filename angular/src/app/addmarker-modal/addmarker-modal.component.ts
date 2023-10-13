import { Component } from '@angular/core';
import { MapDataService } from '../services/map-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MapService } from '../services/mapService';

@Component({
  selector: 'app-addmarker-modal',
  templateUrl: './addmarker-modal.component.html',
  styleUrls: ['./addmarker-modal.component.css'],
})
export class AddmarkerModalComponent {
  formObj: any = {
    name: '',
    address: '',
    startingPrice: '',
    lng: 0,
    lat: 0,
    price: 0,
    propertyId: 0,
    amenities: '',
    photo: '',
    state: '',
  };
  constructor(
    private mapDataService: MapDataService,
    private http: HttpClient,
    private router: Router,
    private mapService: MapService
  ) {}

  addLocation(formObj: any) {
    console.log(formObj);
    this.mapService.addMarker(formObj.lng, formObj.lat);
    this.mapDataService.addMapData(formObj).subscribe(
      (response) => {
        console.log(response);
        response !== null
          ? alert('Add marker success!')
          : alert('Add marker failed!');
        window.location.reload();
      },
      (error) => {
        console.error('Register failed', error);
        alert('Register failed!');
      }
    );
  }
}
