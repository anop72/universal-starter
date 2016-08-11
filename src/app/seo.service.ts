import { Injectable, EventEmitter } from '@angular/core';
import { Model } from './seo.model';

@Injectable()
export class SeoService {

  private eventEmitter: EventEmitter<Model>;
  private model: Model;

  constructor() {
    this.model = new Model();
    this.eventEmitter = new EventEmitter<Model>();
  }

  public set(model: Model): void {
    this.model = model;
    this.eventEmitter.emit(this.model);
  }

  public getEmitter(): EventEmitter<Model> {
    return this.eventEmitter;
  }

}
