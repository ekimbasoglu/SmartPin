import { Injectable } from '@angular/core';
import { MapService } from './mapService';

@Injectable({
  providedIn: 'root',
})
export class MapDataService {
  constructor(private mapService: MapService, private httpService) {

  }


}
