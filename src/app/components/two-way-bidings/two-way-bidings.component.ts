import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bidings',
  templateUrl: './two-way-bidings.component.html',
  styleUrls: ['./two-way-bidings.component.scss'],
})
export class TwoWayBidingsComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor() {}

  ngOnInit(): void {}
}
