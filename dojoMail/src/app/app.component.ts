import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  emails=[{email:'spence@peacock.com', important:'yeah', subject:'nadamucho',content:'im better than drew at ping pong'},
  {email:'donald@trump.com', important:'totally',subject:'russia-topsecret-classified', content:'i did the russia stuff'}
  ]

}
