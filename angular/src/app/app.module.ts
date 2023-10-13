import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    LogoutComponent,
    MapComponent,
    ListComponent,
    AddmarkerModalComponent,
    ConnectionlostComponent,
    DeleteMarkerModalComponent,
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
