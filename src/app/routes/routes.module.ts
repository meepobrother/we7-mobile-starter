import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes, components } from './routes';
import { SharedModule } from '@shared/shared.module';
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        SharedModule
    ],
    exports: [],
    declarations: [
        components
    ],
    providers: [],
})
export class RoutesModule { }
