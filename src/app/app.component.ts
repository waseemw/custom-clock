import {AfterContentInit, Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from './modal/modal.component';
import {TimeService} from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  constructor(private dialog: MatDialog, public timeService: TimeService) {
  }

  title = 'timer';

  ngAfterContentInit() {
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
