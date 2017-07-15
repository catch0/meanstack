import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails=[{email:'spence@peacock.com', important:'yeah', subject:'nadamucho',content:'im better than drew at ping pong'},
  {email:'donald@trump.com', important:'totally',subject:'russia-topsecret-classified', content:'i did the russia stuff'},
  {email:'ivanka@trump.com', important:'yes', subject:'justin treadaue is hawt', content:'i want to marry justin treadaue'},
  ]

}
