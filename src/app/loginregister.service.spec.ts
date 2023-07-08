import { TestBed } from '@angular/core/testing';

import { LoginregisterService } from './loginregister.service';

describe('LoginregisterService', () => {
  let service: LoginregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
