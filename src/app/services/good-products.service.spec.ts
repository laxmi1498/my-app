import { TestBed } from '@angular/core/testing';

import { GoodProductsService } from './good-products.service';

describe('GoodProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodProductsService = TestBed.get(GoodProductsService);
    expect(service).toBeTruthy();
  });
});
