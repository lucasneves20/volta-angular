import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dirst-component',
  templateUrl: './dirst-component.component.html',
  styleUrls: ['./dirst-component.component.scss'],
})
export class DirstComponentComponent implements OnInit {
  @Input() hobbies: string[] = [];

  name: string = 'lucas';
  age: number = 19;
  job: string = 'developer';
  MyHobbies: string = this.hobbies[0];

  constructor() {}

  ngOnInit(): void {}
}
