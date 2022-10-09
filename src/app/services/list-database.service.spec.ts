import { TestBed } from '@angular/core/testing';

import { ListDatabaseService } from './list-database.service';

describe('ListDatabaseService', () => {
  let service: ListDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
