import { ListDatabaseService } from './../../services/list-database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-database',
  templateUrl: './list-database.component.html',
  styleUrls: ['./list-database.component.scss'],
})
export class ListDatabaseComponent implements OnInit {
  hobbies: string[] = [
    'jogar dark souls',
    'estudar programação',
    'ler algo cristão',
    'assistir qualquer coisa do universo geek',
  ];
  hobbie: string = '';
  state: string = '';

  constructor(private listDatabaseService: ListDatabaseService) {}

  ngOnInit(): void {}

  manipulate(hobbie: string) {
    this.hobbie = hobbie;
    this.state = `meu hobbie mais querido é ${hobbie}`;
    this.hobbies = this.listDatabaseService.manipulate(
      this.hobbies,
      this.hobbie
    );
  }
}
