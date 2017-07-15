import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random barcode gen!';
  color = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
  color2 = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
  color3 = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
  color4 = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
  color5 = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
  color6 = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
  color7 = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
}
