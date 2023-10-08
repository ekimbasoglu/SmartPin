import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userLogged = false;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('authToken') != null) {
      this.userLogged = true;
    }
  }
}
