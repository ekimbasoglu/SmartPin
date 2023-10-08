import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: '',
  };
  constructor(private router: Router, private http: HttpClient) {}

  onContact(name: string, email: string, message: string) {
    if (name == '' || email == '' || message == '') {
      alert('Please fill out all fields.');
      return;
    }

    this.http
      .post('http://localhost:3000/user/contact', {
        name: name,
        email: email,
        message: message,
      })
      .subscribe((data) => {
        console.log(data);
      });

    alert('Contact form submitted.');
    this.router.navigate(['/']);
  }
}
