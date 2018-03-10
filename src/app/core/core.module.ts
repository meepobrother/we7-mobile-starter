import { NgModule } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { We7Service } from './we7.service';
import { SettingsService } from './settings.service';
import { CheckLoginGuard } from './guards/login.guard';
import { CheckRunnerGuard } from './guards/runner.guard';
import { CheckShoperGuard } from './guards/shoper.guard';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [],
    providers: [
        SidebarService,
        We7Service,
        CheckLoginGuard,
        CheckRunnerGuard,
        CheckShoperGuard,
        SettingsService
    ],
})
export class CoreModule { }
