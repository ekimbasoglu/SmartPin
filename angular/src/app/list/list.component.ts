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
export class ListComponent implements OnInit {
  openProperty: any = null;
  properties = mapMock;

  constructor(
    private mapService: MapService,
    private mapDataService: MapDataService
  ) {}

  ngOnInit(): void {
    this.mapDataService.getMapData().subscribe((data) => {
      if (data) {
        console.log(data);
      } else {
        this.mapDataService.updateConnectionStatus(true);
      }
    });
  }

  selectProperty(property: any) {
    // Get the map from the map service
    this.mapService.map$.subscribe((map) => {
      if (map) {
        const markerLongitude = Number(property?.geocode.Longitude);
        const markerLatitude = Number(property?.geocode.Latitude);
        // Zoom
        map.setZoom(10);
        map.panTo(new LngLat(markerLongitude, markerLatitude), {
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
