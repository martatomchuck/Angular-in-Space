import { TestBed } from '@angular/core/testing';

import { DestructionGuard } from './destruction.guard';

describe('DestructionGuard', () => {
  let guard: DestructionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DestructionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
