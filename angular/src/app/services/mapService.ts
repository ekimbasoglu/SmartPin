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
      container: el.nativeElement,
      style: `https://api.maptiler.com/maps/basic/style.json?key=${environment.mapTilerKey}`, // MapTiler style URL
      // style: 'mapbox://styles/mapbox/streets-v12', // default maxbox style URL
      center: [initialState.lng, initialState.lat],
      zoom: 10.83,
    });
    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    for (let i = 0; i < mapMock.length; i++) {
      new mapboxgl.Marker({ color: '#FF0000' })
        .setLngLat([
          Number(mapMock[i].geocode.Longitude),
          Number(mapMock[i].geocode.Latitude),
        ])
        .addTo(this.map);
    }
  }
  getMap(): any {
    return this.map;
  }
}
