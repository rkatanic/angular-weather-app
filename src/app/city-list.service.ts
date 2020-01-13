import { List } from './list';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CityListService {

  constructor(private toastr: ToastrService) { }

  public cityList: List[] = [
    new List('Europe', ['Belgrade', 'Vienna', 'Berlin', 'Helsinki', 'Madrid', 'Paris']),
    new List('Asia', ['Beijing', 'New Delhi', 'Kuala Lumpur', 'Tokyo', 'Hanoi', 'Abu Dhabi']),
    new List('Africa', ['Addis Ababa', 'Nairobi', 'Gaborone', 'Luanda', 'Antananarivo', 'Abuja']),
    new List('North America', ['Washington', 'Detroit', 'Toronto', 'Boston', 'Los Angeles', 'Dallas']),
    new List('South America', ['Buenos Aires', 'Brasilia', 'Santiago', 'Montevideo', 'Caracas', 'Lima'])
  ];

  saveNewList(list_name: string, cities: string[]) {
    const listName = list_name;
    const LIST = new List(listName, cities);
    this.cityList.push(LIST);
    this.toastr.success('List "' + listName + '" successfully added!', 'List Added!');
  }

  getList() {
    return this.cityList;
  }

  deleteList(list: List) {
    this.cityList.splice(this.cityList.indexOf(list), 1);
    this.toastr.error('List "' + list.listName + '" successfully deleted!', 'List Deleted');
  }
}
