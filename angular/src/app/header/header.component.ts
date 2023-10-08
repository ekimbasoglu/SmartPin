import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ifDashboard = 'Dashboard';
  constructor(private router: Router) {}

  goToDashboard() {
    const authToken = localStorage.getItem('authToken');
    // TODO Check authToken if it's validated

    if (authToken) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    if (this.router.url === '/dashboard') {
      this.ifDashboard = 'logout';
    } else {
      this.ifDashboard = 'Dashboard';
    }
  }
}
