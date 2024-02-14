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
import * as mapboxgl from 'mapbox-gl';
import { Subscription } from 'rxjs';

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
      <div class="w-full h-full" id="map" #map></div>
    </div>
  `,
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  constructor(private mapService: MapService, private el: ElementRef) {}
  mapSubscription!: Subscription;

  ngAfterViewInit(): void {
    // this.mapService.initMap(this.el);
    this.mapSubscription = this.mapService.map$.subscribe(() => {
      this.mapService.initMap(this.el);
    });
  }
  ngOnDestroy() {
    if (this.mapSubscription) {
      this.mapSubscription.unsubscribe();
    }
  }
}
