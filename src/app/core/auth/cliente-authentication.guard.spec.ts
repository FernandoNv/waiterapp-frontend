import { TestBed } from '@angular/core/testing';

import { ClienteAuthenticationGuard } from './cliente-authentication.guard';

describe('ClienteAuthenticationGuard', () => {
  let guard: ClienteAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClienteAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
