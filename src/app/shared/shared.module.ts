import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeuiModule } from '../weui.module';

import { Page } from './page/page';

export const components = [
    Page
];
@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        WeuiModule
    ],
    exports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        WeuiModule,
        ...components
    ],
    declarations: [
        ...components
    ],
    providers: [],
})
export class SharedModule { }
