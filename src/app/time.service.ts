import {Injectable} from '@angular/core';

import dateFormat from 'dateformat';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  dateObj = Date.now();

  time: string
  date: string

  constructor() {
    this.setTime();
    setInterval(() => this.setTime(), 1000);
  }

  setTime() {
    this.dateObj+=1000;
    this.time = dateFormat(this.dateObj, "HH:MM:ss")
    this.date = dateFormat(this.dateObj, "dddd, dd mmmm yyyy");
  }

}
