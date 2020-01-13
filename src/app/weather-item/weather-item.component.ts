import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from '../weather-item';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
})
export class WeatherItemComponent implements OnInit {
  @Input() weatherItem: WeatherItem;
  @Input() index: number;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  deleteItem() {
    this.weatherService.deleteWeatherItem(this.index);
  }

}
