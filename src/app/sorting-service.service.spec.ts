import { TestBed, inject } from '@angular/core/testing';

import { SortingService} from './sorting.service';

describe('SortingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortingService]
    });
  });

  it('should be created', inject([SortingService], (service: SortingService) => {
    expect(service).toBeTruthy();
  }));
});
