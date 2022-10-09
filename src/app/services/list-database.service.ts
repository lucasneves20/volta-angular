import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListDatabaseService {
  constructor() {}

  manipulate(hobbies: string[], hobbie: string) {
    return hobbies.filter((a) => hobbie !== a);
  }
}
