import { ElementRef, Injectable, OnInit } from '@angular/core';
import {
  Map,
  NavigationControl,
  Marker,
  LngLat,
  LngLatBounds,
} from 'maplibre-gl';
import { mapMock } from 'src/mocks/map.mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  public map: Map | undefined;

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  initMap(el: any): void {
    const initialState = { lng: -97.393521, lat: 32.567122, zoom: 8.5 };
    this.map = new Map({
      container: el.nativeElement,
      style: `https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=${environment.mapTilerKey}`, // MapTiler style URL
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
    this.map.addControl(new NavigationControl(), 'top-right');
    // generate a for function that gets all the properties and returns their geolocation
    for (let i = 0; i < mapMock.length; i++) {
      // convert the string data to number
      const long = Number(mapMock[i].geocode.Longitude);
      const lat = Number(mapMock[i].geocode.Latitude);
      new Marker({ color: '#FF0000' }).setLngLat([long, lat]).addTo(this.map);
    }
  }

  getMapInstance(): Map | undefined {
    return this.map;
  }
}
