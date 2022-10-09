import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  hobbies: string[] = [
    'jogar dark souls',
    'estudar programação',
    'ler algo cristão',
    'assistir qualquer coisa do universo geek',
  ];
  constructor() {}

  ngOnInit(): void {}
}
