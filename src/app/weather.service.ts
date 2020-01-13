import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherItem } from './weather-item';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  deleteWeatherItem(index: number) {
    WEATHER_ITEMS.splice(index, 1);
    this.toastr.error('City successfully deleted from list!', 'City deleted!');
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
    this.toastr.success('Successfully added!', 'Added!');
  }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  searchWeatherData(city: string): Observable<any> {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q='
      + city + '&APPID=6b8447de257abfcd38b8f8f1c630afd8&units=metric');
  }

  clearWeatherItems() {
    WEATHER_ITEMS.splice(0);
  }
}
