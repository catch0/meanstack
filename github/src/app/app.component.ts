import { Component } from '@angular/core';
import {APIService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github LOOKUP';
  score: any = 'temp';
  newUser: Object = {};

  onSubmit(newUser){
    // console.log(newUser);
    // console.log('shit works');
    return this._api.getUser(newUser.username)
    .then(output =>{console.log(output)
      this.score = output.public_repos;
      ;})
    .catch(err =>{console.log(err);})

    // return false;
  }
  constructor(private _api:APIService){}
}
