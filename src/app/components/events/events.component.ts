import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  showBoolean: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.showBoolean = !this.showBoolean; //toggle
  }
}
