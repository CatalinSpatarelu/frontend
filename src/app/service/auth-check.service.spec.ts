import { TestBed } from '@angular/core/testing';

import { AuthCheckServiceForUser } from './auth-check-service-for-user.service';

describe('AuthCheckService', () => {
  let service: AuthCheckServiceForUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCheckServiceForUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
