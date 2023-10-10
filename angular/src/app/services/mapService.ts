import { ElementRef, Injectable, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
// import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { mapMock } from 'src/mocks/map.mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map: any;

  initMap(el: any): void {
    const initialState = { lng: -97.393521, lat: 32.567122, zoom: 8.5 };
    this.map = new mapboxgl.Map({
      container: el.nativeElement, // this or either el.nativeElement
      style: `https://api.maptiler.com/maps/basic/style.json?key=${environment.mapTilerKey}`, // MapTiler style URL
      center: [initialState.lng, initialState.lat], // starting position [lng, lat]
      zoom: 10.83, // starting zoom
    });
    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // generate a for function that gets all the properties and returns their geolocation
    for (let i = 0; i < mapMock.length; i++) {
      // convert the string data to number
      const long = Number(mapMock[i].geocode.Longitude);
      const lat = Number(mapMock[i].geocode.Latitude);
      new mapboxgl.Marker({ color: '#FF0000' })
        .setLngLat([long, lat])
        .addTo(this.map);
    }
  }
  getMap(): any {
    return this.map;
  }
}
