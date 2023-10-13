import { Component, OnInit } from '@angular/core';
import { mapMock } from 'src/mocks/map.mock';
import { MapService } from '../services/mapService';
import {
  Map,
  NavigationControl,
  Marker,
  LngLat,
  LngLatBounds,
} from 'maplibre-gl';
import { MapDataService } from '../services/map-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  openProperty: any = null;
  properties: any = [];

  constructor(
    private mapService: MapService,
    private mapDataService: MapDataService
  ) {
    this.mapDataService.getMapData().subscribe((data) => {
      if (data) {
        this.properties = data;
      } else {
        this.mapDataService.updateConnectionStatus(true);
      }
    });
  }

  selectProperty(property: any) {
    console.log(property);
    this.mapService.map$.subscribe((map) => {
      if (map) {
        // Zoom
        map.setZoom(10);
        map.panTo(new LngLat(property.lng, property.lat), {
          duration: 1000,
        });
      }
    });

    // Accordion logic
    this.openProperty === property
      ? (this.openProperty = null)
      : (this.openProperty = property);
  }
}
