import { ElementRef, Injectable, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { mapMock } from 'src/mocks/map.mock';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  // map: any;
  private mapSubject = new BehaviorSubject<mapboxgl.Map | null>(null);

  initMap(el: any): void {
    const initialState = { lng: -97.393521, lat: 32.567122, zoom: 8.5 };
    const map = new mapboxgl.Map({
      container: el.nativeElement,
      // style: `https://api.maptiler.com/maps/basic/style.json?key=${environment.mapTilerKey}`, // MapTiler style URL
      style: 'mapbox://styles/mapbox/streets-v12', // default maxbox style URL
      center: [initialState.lng, initialState.lat],
      zoom: 10.83,
    });
    this.initMapFeatures(map);
    this.mapSubject.next(map);
  }
  initMapFeatures(map: mapboxgl.Map) {
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    for (let i = 0; i < mapMock.length; i++) {
      new mapboxgl.Marker({ color: '#FF0000' })
        .setLngLat([
          Number(mapMock[i].geocode.Longitude),
          Number(mapMock[i].geocode.Latitude),
        ])
        .addTo(map);
    }
  }

  get map$(): Observable<mapboxgl.Map | null> {
    return this.mapSubject.asObservable();
  }

  addMarker(lng: number, lat: number): any {
    this.map$.subscribe((map) => {
      if (map) {
        // Setting the Marker
        new mapboxgl.Marker({ color: '#FA8128' })
          .setLngLat([lng, lat])
          .addTo(map);
        // Zoom
        map.setZoom(10);
        map.panTo(new mapboxgl.LngLat(lng, lat), { duration: 1000 });
      }
    });
  }
}
