import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  }

  onSubmit(form: NgForm) {
    this.weatherService.searchWeatherData(form.value.location).subscribe(
      data => {
        const WEATHER_ITEM = new WeatherItem(data.name, data.weather[0].description, data.main.temp, data.main.humidity, data.main.pressure, data.sys.country,data.weather[0].icon);
        this.weatherService.addWeatherItem(WEATHER_ITEM);
      }
    );
  }

  ngOnInit() {
  }

}


/*


*/
