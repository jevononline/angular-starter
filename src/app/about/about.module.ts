import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './about.routes';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
