import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import mapboxgl from 'mapbox-gl';
import { environment } from './environments/environment';

// Set the Mapbox access token here
mapboxgl.accessToken = environment.mapbox.accessToken;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
