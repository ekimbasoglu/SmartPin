import { Component } from '@angular/core';
import { mapMock } from 'src/mocks/map.mock';
import { MapService } from '../services/mapService';
import {
  Map,
  NavigationControl,
  Marker,
  LngLat,
  LngLatBounds,
} from 'maplibre-gl';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  openProperty: any = null; // To keep track of the currently open property
  properties = mapMock;
  constructor(public mapService: MapService) {}
  selectProperty(property: any) {
    // Get the map from the map service
    const map = this.mapService.getMapInstance();
    const markerLongitude = Number(property?.geocode.Longitude);
    const markerLatitude = Number(property?.geocode.Latitude);

    const markerCoordinates = new LngLat(markerLongitude, markerLatitude);

    // Define the maximum allowable zoom level
    const maxZoom = 10;

    // Use setZoom to set the zoom level to the maximum allowable zoom
    map!.setZoom(maxZoom);

    // Use panTo to center the map on the marker coordinates
    map!.panTo(markerCoordinates, {
      duration: 1000, // Optional animation duration in milliseconds
    });

    // Accordion logic
    this.openProperty === property
      ? (this.openProperty = null)
      : (this.openProperty = property);
  }
}
