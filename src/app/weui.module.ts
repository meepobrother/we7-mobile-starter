import { NgModule, ModuleWithProviders } from '@angular/core';
import { ActionSheetModule } from 'ngx-weui/actionsheet';
import { AccordionModule } from 'ngx-weui/accordion';
import { ButtonModule } from 'ngx-weui/button';
import { DialogModule } from 'ngx-weui/dialog';
import { MaskModule } from 'ngx-weui/mask';
import { GalleryModule } from 'ngx-weui/gallery';
import { InfiniteLoaderModule } from 'ngx-weui/infiniteloader';
import { FormModule } from 'ngx-weui/form';
import { CellModule } from 'ngx-weui/cell';
import { LoadmoreModule } from 'ngx-weui/loadmore';
import { TabModule } from 'ngx-weui/tab';
import { PickerModule } from 'ngx-weui/picker';
import { PopupModule } from 'ngx-weui/popup';
import { PTRModule } from 'ngx-weui/ptr';
import { ToastModule } from 'ngx-weui/toast';
import { ToptipsModule } from 'ngx-weui/toptips';
import { RatingModule } from 'ngx-weui/rating';
import { UploaderModule } from 'ngx-weui/uploader';
import { SidebarModule } from 'ngx-weui/sidebar';
import { StepperModule } from 'ngx-weui/stepper';
import { PaginationModule } from 'ngx-weui/pagination';
import { SwiperModule } from 'ngx-weui/swiper';
import { ChartG2Module } from 'ngx-weui/chart-g2';
import { JWeiXinModule } from 'ngx-weui/jweixin';

@NgModule({
    imports: [
        ActionSheetModule.forRoot(),
        AccordionModule.forRoot(),
        ButtonModule.forRoot(),
        DialogModule.forRoot(),
        MaskModule.forRoot(),
        GalleryModule.forRoot(),
        InfiniteLoaderModule.forRoot(),
        FormModule.forRoot(),
        CellModule.forRoot(),
        LoadmoreModule.forRoot(),
        TabModule.forRoot(),
        PickerModule.forRoot(),
        PopupModule.forRoot(),
        PTRModule.forRoot(),
        ToastModule.forRoot(),
        ToptipsModule.forRoot(),
        RatingModule.forRoot(),
        UploaderModule.forRoot(),
        SidebarModule.forRoot(),
        StepperModule.forRoot(),
        PaginationModule.forRoot(),
        SwiperModule.forRoot(),
        ChartG2Module.forRoot(),
        JWeiXinModule.forRoot()
    ],
    exports: [
        ActionSheetModule,
        AccordionModule,
        ButtonModule,
        DialogModule,
        MaskModule,
        GalleryModule,
        InfiniteLoaderModule,
        FormModule,
        CellModule,
        LoadmoreModule,
        TabModule,
        PickerModule,
        PopupModule,
        PTRModule,
        ToastModule,
        ToptipsModule,
        RatingModule,
        UploaderModule,
        SidebarModule,
        StepperModule,
        PaginationModule,
        SwiperModule,
        ChartG2Module,
        JWeiXinModule
    ],
    declarations: [],
    providers: [],
})
export class WeuiModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WeuiModule,
            providers: []
        }
     }
}
