import { TestBed } from '@angular/core/testing';

import { PomarcadService } from './pomarcad.service';

describe('PomarcadService', () => {
  let service: PomarcadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PomarcadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
