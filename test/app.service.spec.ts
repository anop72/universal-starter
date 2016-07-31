import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import { provide } from '@angular/core';
import { Service } from '../src/app/app.service';

describe('Service:', () => {

  beforeEachProviders(() => {
    return [Service];
  });

  it('should create the service',
      inject([Service], (service: Service) => {
          expect(service).toBeTruthy();
  }));

});
