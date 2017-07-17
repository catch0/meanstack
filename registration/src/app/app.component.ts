import { Component } from '@angular/core';
// import angularMaterialize from 'angular-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Project!';
  users = [];
  user = {
    firstName: '',
    lastName: '',
    email: '',
    unit: '',
    city: '',
    state: '',
    lucky: Boolean,

  };
  submit: Boolean=false;
onSubmit(){
  console.log(this.user.firstName);
  this.submit = true;
}
}
