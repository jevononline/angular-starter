import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
