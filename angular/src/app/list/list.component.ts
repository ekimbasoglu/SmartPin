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
import { MapDataService } from '../services/map-data.service';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  openProperty: any = null;
  properties: any = [];

  constructor(
    private mapService: MapService,
    private mapDataService: MapDataService
  ) {}
  ngOnInit(): void {
    // Updating the properties with the data from the API
    this.mapDataService.getMapData().subscribe((data) => {
      if (data) {
        console.log(data);
        // update the properties with data
        this.properties = data;
        // set the pins/markers on the map
        this.mapService.map$.subscribe((map) => {
          if (map) {
            console.log(this.properties);
            for (let i = 0; i < this.properties.length; i++) {
              new mapboxgl.Marker({ color: '#FF0000' })
                .setLngLat([
                  Number(this.properties[i].lng),
                  Number(this.properties[i].lat),
                ])
                .addTo(map);
            }
          }
        });
      } else {
        this.mapDataService.updateConnectionStatus(true);
      }
    });
  }

  selectProperty(property: any) {
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
