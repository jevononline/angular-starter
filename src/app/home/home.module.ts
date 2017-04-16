import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
