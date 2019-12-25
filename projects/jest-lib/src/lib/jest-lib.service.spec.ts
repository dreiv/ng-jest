import { TestBed } from '@angular/core/testing';

import { JestLibService } from './jest-lib.service';

describe('JestLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JestLibService = TestBed.get(JestLibService);
    expect(service).toBeTruthy();
  });
});
