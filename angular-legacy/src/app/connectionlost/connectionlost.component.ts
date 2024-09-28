import { Component } from '@angular/core';

@Component({
  selector: 'app-connectionlost',
  templateUrl: './connectionlost.component.html',
  styleUrls: ['./connectionlost.component.css'],
})
export class ConnectionlostComponent {
  reloadPage() {
    window.location.reload();
  }
}
