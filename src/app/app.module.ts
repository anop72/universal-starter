import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule  } from '@angular/http';
import { RouterModule  } from '@angular/router';
import { App, About }   from './app.component';
import { routes }   from './app.routes';
import { Home } from './home';

@NgModule({
    declarations: [App, Home, About],
    imports:  [
      BrowserModule
      , RouterModule.forRoot(routes)
      , HttpModule],
    bootstrap:    [App]
})
export class AppModule {}
