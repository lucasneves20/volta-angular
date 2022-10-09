import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss'],
})
export class ParentDataComponent implements OnInit {
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() hobbies: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
