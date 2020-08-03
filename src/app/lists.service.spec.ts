import { TestBed } from '@angular/core/testing';

import { listsService } from './lists.service';

describe('listsService', () => {
  let service: listsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(listsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
