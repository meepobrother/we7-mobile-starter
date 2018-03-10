import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeuiModule } from '../weui.module';

import { Page } from './page/page';
import { AdAvatarListModule, AdDescListModule, AdProHeaderModule, AdResultModule, AdNoticeIconModule } from '@delon/abc';
import {
    NzToolTipModule, NzTabsModule, NzBreadCrumbModule,
    NzButtonModule, NzDropDownModule, NzGridModule, NzCardModule,
    NzStepsModule
} from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd-extra';
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
        NzTabsModule,
        NzBreadCrumbModule,
        NzButtonModule,
        NzDropDownModule,
        AdDescListModule,
        AdProHeaderModule.forRoot(),
        NzGridModule,
        NzCardModule,
        AdResultModule,
        NzStepsModule,
        AdNoticeIconModule,
        NzIconModule
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
        NzButtonModule,
        NzBreadCrumbModule,
        NzDropDownModule,
        AdDescListModule,
        AdProHeaderModule,
        NzGridModule,
        NzCardModule,
        AdResultModule,
        NzStepsModule,
        AdNoticeIconModule,
        NzIconModule,
        ...components
    ],
    declarations: [
        ...components
    ],
    providers: [],
})
export class SharedModule { }
