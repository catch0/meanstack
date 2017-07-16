import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myArr = ['sex', 'drugs', 'rock n roll', 'pop tarts'];
  myBoolean = true;
    users = [];

  user = {
  firstName: '',
  lastName: '',
  alias: ''
  }
      
onSubmit(){
    console.log("onSubmit()");
    console.log(this.user);
    this.user = {
        firstName: '',
        lastName: '',
        alias: ''
    };
  }
}
