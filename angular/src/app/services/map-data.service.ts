import { Injectable } from '@angular/core';
import { MapService } from './mapService';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapDataService {
  private connectionLost = new BehaviorSubject<boolean>(false);

  constructor(private mapService: MapService, private http: HttpClient) {}
  
  connectionLost$: Observable<boolean> = this.connectionLost.asObservable();
  updateConnectionStatus(status: boolean) {
    this.connectionLost.next(status);
  }

  getMapData(): Observable<any> {
    return this.http.get('http://localhost:3000/map/get').pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => {
        console.error('API request failed:', error);
        return of(null);
      })
    );
  }
}
