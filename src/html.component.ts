import { Component, EventEmitter } from '@angular/core';
import { App } from './app/app.component';
import { SeoService } from './app/seo.service';
import { Model } from './app/seo.model';

@Component({
  moduleId: module.id,
  directives: [App],
  selector: 'html',
  templateUrl: 'html.component.html'
})
export class HTML {

  model: Model;
  subscriber: EventEmitter<Model>;

  constructor(private _seo: SeoService) {
    this.model = new Model();
  }

  ngOnInit() {
    this._seo.getEmitter().subscribe((m) => {
      this.model = m;
    });
  }
}
