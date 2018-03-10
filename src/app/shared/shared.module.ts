import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeuiModule } from '../weui.module';

import { Page } from './page/page';
import { AdAvatarListModule } from '@delon/abc';
import { NzToolTipModule, NzTabsModule } from 'ng-zorro-antd';
export const components = [
    Page,
];
@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        WeuiModule,
        AdAvatarListModule,
        NzToolTipModule,
        NzTabsModule
    ],
    exports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        WeuiModule,
        AdAvatarListModule,
        NzToolTipModule,
        NzTabsModule,
        ...components
    ],
    declarations: [
        ...components
    ],
    providers: [],
})
export class SharedModule { }
