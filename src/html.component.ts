import { Component } from '@angular/core';
import { App } from './app/app.component';

@Component({
  moduleId: module.id,
  directives: [App],
  selector: 'html',
  templateUrl: 'html.component.html'
})
export class HTML {}
