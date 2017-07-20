import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather;
   temp;
   humidity;
   high;
   low;
   status;
   speed;
   wind;

  constructor(private _weatherService: WeatherService){}

  ngOnInit() {
    this.weather = this._weatherService.getWeather('chicago')
    .then( weather => {
      console.log(weather)
      this.temp = weather.main.temp;
      this.temp = Math.floor(this.temp * (9/5) - 459.67);
      this.humidity= weather.main.humidity;
      this.high = weather.main.temp_max;
      this.high = Math.floor(this.high *(9/5)- 459.67);
      this.low = weather.main.temp_min;
      this.low = Math.floor(this.low* (9/5)-459.67);
      this.status = weather.weather[0].description;
      this.wind = weather.wind.speed;
    });
  }
}
