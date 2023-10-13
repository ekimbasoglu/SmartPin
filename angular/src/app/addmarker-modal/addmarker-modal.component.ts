import { Component } from '@angular/core';

@Component({
  selector: 'app-addmarker-modal',
  templateUrl: './addmarker-modal.component.html',
  styleUrls: ['./addmarker-modal.component.css'],
})
export class AddmarkerModalComponent {
  formObj: any = {
    name: '',
    address: '',
    startingPrice: '',
    lng: 0,
    lat: 0,
    price: 0,
    propertyId: 0,
    amenities: '',
    photo: '',
    state: '',
  };
  getModal() {
    throw new Error('Method not implemented.');
  }
}
