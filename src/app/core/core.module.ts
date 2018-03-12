import { NgModule, APP_INITIALIZER } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { We7Service } from './we7.service';
import { SettingsService } from './settings.service';
import { CheckLoginGuard } from './guards/login.guard';
import { CheckRunnerGuard } from './guards/runner.guard';
import { CheckShoperGuard } from './guards/shoper.guard';
import { HttpClientModule } from '@angular/common/http';
import { StartupService } from './startup.service';
export function StartupServiceFactory(startupService: StartupService): Function {
    return () => startupService.load();
}
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
        StartupService,
        SettingsService,
        {
            provide: APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [StartupService],
            multi: true
        }
    ],
})
export class CoreModule { }
