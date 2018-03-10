import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7Service } from './we7.service';
@Injectable()
export class SettingsService {
    props: any = {};
    constructor(
        public we7: We7Service,
        public http: HttpClient
    ) { }

    initSetting() {
        return this.http.get(this.we7.getMobileUrl('getconfig'));
    }
}