import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';   
  switches: boolean[] = [true, true, true, true, true, true, true, true, false, false, false, false, false];

  flipSwitch(idx): void{
    this.switches[idx] = !this.switches[idx];
    }
}
