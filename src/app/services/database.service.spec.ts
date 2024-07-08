import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
  });

  it('Se creo correctamente', () => {
    expect(service).toBeTruthy();
  });

  //it('should initialize database', async () => {
    //await service.initDatabase();
    //expect(service.db).not.toBeNull();
  //});
});

