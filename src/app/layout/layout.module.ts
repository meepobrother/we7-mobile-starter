import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DefaultComponent } from './default/default';
import { FooterComponent } from './default/footer/footer';
import { HeaderComponent } from './default/header/header';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        DefaultComponent
    ],
    declarations: [
        DefaultComponent,
        FooterComponent,
        HeaderComponent
    ],
    providers: [],
})
export class LayoutModule { }
