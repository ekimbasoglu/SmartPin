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
      // style: `https://api.maptiler.com/maps/basic/style.json?key=${environment.mapTilerKey}`, // MapTiler style URL
      style: 'mapbox://styles/mapbox/streets-v12', // default maxbox style URL
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

  addMarker(lng: number, lat: number): any {
    const map = this.getMap();
    new mapboxgl.Marker({ color: '#FA8128' }).setLngLat([lng, lat]).addTo(map);

    const markerCoordinates = new mapboxgl.LngLat(lng, lat);

    // Define the maximum allowable zoom level
    const maxZoom = 10;

    // Use setZoom to set the zoom level to the maximum allowable zoom
    map.setZoom(maxZoom);

    // Use panTo to center the map on the marker coordinates
    map.panTo(markerCoordinates, {
      duration: 1000, // Optional animation duration in milliseconds
    });
  }
}
