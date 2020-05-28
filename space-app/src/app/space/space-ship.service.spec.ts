import { TestBed } from '@angular/core/testing';

import { SpaceShipService } from './space-ship.service';

describe('SpaceShipService', () => {
  let service: SpaceShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
