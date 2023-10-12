import { Component } from '@angular/core';
import { MapService } from '../services/mapService';
import { AddmarkerModalComponent } from '../addmarker-modal/addmarker-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    public mapService: MapService,
    public addmarkerModalComponent: AddmarkerModalComponent
  ) {}
  openModal() {
    return this.addmarkerModalComponent.getModal();
  }
}
