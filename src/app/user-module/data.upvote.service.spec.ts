import { TestBed } from '@angular/core/testing';

import { UpvoteService } from './data.upvote.service';

describe('UpvoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpvoteService = TestBed.get(UpvoteService);
    expect(service).toBeTruthy();
  });
});
