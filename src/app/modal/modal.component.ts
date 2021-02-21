import {AfterViewInit, Component} from '@angular/core';
import {TimeService} from '../time.service';

import dateFormat from 'dateformat';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit {
  text: string

  constructor(private  timeService: TimeService) {
  }


  change() {
    console.log(this.text)
    this.timeService.dateObj = new Date(this.text).getTime();
  }

  i = false;

  disableAnimation = true;

  ngAfterViewInit(): void {
    this.text = dateFormat(this.timeService.dateObj, "yyyy-mm-dd") + "T" + dateFormat(this.timeService.dateObj, "HH:MM:ss")
    setTimeout(() => this.disableAnimation = false);
  }
}
