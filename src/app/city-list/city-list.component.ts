import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { CityListService } from '../city-list.service';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  listName: string;
  lists: List[];

  constructor(private cityListService: CityListService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.lists = this.cityListService.getList();
  }

  onSaveList() {
    const CITIES = this.weatherService.getWeatherItems().map(function(element: WeatherItem) {
      return element.city;
    });
    this.cityListService.saveNewList(this.listName, CITIES);
  }

  onLoadList(list: List) {
    this.weatherService.clearWeatherItems();
    for (let i = 0; i < list.cities.length; i++) {
      this.weatherService.searchWeatherData(list.cities[i])
        .subscribe(data => {
          const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp,data.sys.country);
          this.weatherService.addWeatherItem(weatherItem);
        });
    }
  }

  deleteList(event: Event, list: List) {
    event.stopPropagation();
    this.cityListService.deleteList(list);
  }
}
