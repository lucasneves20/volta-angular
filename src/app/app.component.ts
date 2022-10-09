import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'volta-angular';
  userName: string = 'Lucas Neves';
  age: number = 19;
  hobbies: string[] = [
    'jogar dark souls',
    'estudar programação',
    'ler algo cristão',
    'assistir qualquer coisa do universo geek',
  ];
}
