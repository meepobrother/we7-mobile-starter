import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { We7Service } from '@core/we7.service';
@Injectable()
export class StartupService {

    constructor(
        private injector: Injector
    ) { }

    load(){
        let settings = this.injector.get(SettingsService);
        settings.init();
    }
}