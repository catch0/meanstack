import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myArr = ['sex', 'drugs', 'rock n roll', 'pop tarts'];
  myBoolean = true;

  user = {
  firstName: 'Spence',
  midName: 'Hersch',
  lastName: 'Peacock'
  }
  today = new Date();
}
