import { TestBed } from '@angular/core/testing';

import { AuthCheckServiceForAdmin } from './auth-check-service-for-admin.service';

describe('AuthCheckServiceForAdminService', () => {
  let service: AuthCheckServiceForAdmin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCheckServiceForAdmin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
