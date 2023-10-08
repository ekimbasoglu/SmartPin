import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { mapMock } from 'src/mocks/map.mock';
import {
  Map,
  NavigationControl,
  Marker,
  LngLat,
  LngLatBounds,
} from 'maplibre-gl';
import { MapService } from '../services/mapService';

@Component({
  selector: 'app-map',
  template: `
    <div
      class="relative h-[calc(100vh-77px)]
      "
    >
      <a href="https://www.maptiler.com" class="absolute left-3 bottom-3 -z--1"
        ><img
          src="https://api.maptiler.com/resources/logo.svg"
          alt="MapTiler logo"
      /></a>
      <div class="w-full h-full" #map></div>
    </div>
  `,
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  constructor(private mapService: MapService, private el: ElementRef) {}

  ngAfterViewInit() {
    this.mapService.initMap(this.el);
  }
}

// function loadPins(map: any, property?: any) {
//   // generate a for function that gets all the properties and returns their geolocation
//   for (let i = 0; i < mapMock.length; i++) {
//     // convert the string data to number
//     const long = Number(mapMock[i].geocode.Longitude);
//     const lat = Number(mapMock[i].geocode.Latitude);
//     new Marker({ color: '#FF0000' }).setLngLat([long, lat]).addTo(map);
//   }
//   // check if the property is not undefined
//   if (property !== undefined) {
//     alert('it works');
//     // get the coordinates of the property
//     const markerLongitude = Number(property?.geocode.Longitude);
//     const markerLatitude = Number(property?.geocode.Latitude);

//     const markerCoordinates = new LngLat(markerLongitude, markerLatitude);
//     const bounds = new LngLatBounds().extend(markerCoordinates); // Adjust the padding value as needed to control the zoom level

//     map.fitBounds(bounds, {
//       padding: 20, // Optional padding around the bounding box
//       duration: 1000, // Optional animation duration in milliseconds
//     });
//   }
// }
