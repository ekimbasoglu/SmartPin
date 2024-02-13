import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AddmarkerModalComponent } from './addmarker-modal/addmarker-modal.component';
import { ConnectionlostComponent } from './connectionlost/connectionlost.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteMarkerModalComponent } from './delete-marker-modal/delete-marker-modal.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    ListComponent,
    AddmarkerModalComponent,
    ConnectionlostComponent,
    DeleteMarkerModalComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDialogModule,
  ],
  providers: [MapComponent, AddmarkerModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
