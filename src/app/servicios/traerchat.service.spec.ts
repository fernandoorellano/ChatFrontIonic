import { TestBed } from '@angular/core/testing';

import { TraerchatService } from './traerchat.service';

describe('TraerchatService', () => {
  let service: TraerchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
