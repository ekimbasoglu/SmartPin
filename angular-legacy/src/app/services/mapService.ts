import { ElementRef, Injectable, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { BehaviorSubject, Observable } from 'rxjs';
import { mapMock } from 'src/mocks/map.mock';
import { environment } from '../../../src/environments/environment';
import { MapDataService } from './map-data.service';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private mapSubject = new BehaviorSubject<mapboxgl.Map | null>(null);
  draw: any;

  initMap(el: any): void {
    const initialState = { lng: -97.393521, lat: 32.567122, zoom: 8.5 };
    const map = new mapboxgl.Map({
      container: el.nativeElement,
      style: `https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=${environment.mapTilerKey}`, // MapTiler style URL
      center: [initialState.lng, initialState.lat],
      zoom: 10.83,
    });
    this.initMapFeatures(map);
    this.mapSubject.next(map);

    // Initialize Mapbox Draw
    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
    });
  }
  // Navigation Control Initialization
  initMapFeatures(map: mapboxgl.Map) {
    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(this.draw);
    map.on('click', this.handleMapClick.bind(this));
    map.on('draw.create', function (e: any) {
      alert('create');
      console.log(e);
    });
  }

  handleMapClick(event: any) {
    // Handle right-click event
    if (event.originalEvent.button === 2) {
      // Do something when right-clicked
      // Start drawing
      this.draw.changeMode('draw_polygon');
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
