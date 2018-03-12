import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7Service } from './we7.service';
@Injectable()
export class SettingsService {
    _record: any = {};
    hasInited: boolean = false;
    get record() {
        if (this.hasInited) {
            return this._record;
        } else {
            return false;
        }
    }

    set record(val: any) {
        this._record = val;
    }

    constructor(
        private http: HttpClient,
        private we7: We7Service
    ) { 
        this.initSetting();
    }

    initSetting() {
        return this.http.get(this.we7.getMobileUrl('getconfig'));
    }

    init() {
        this.initSetting().subscribe(res => {
            this.hasInited = true;
            this.record = res;
        });
    }
}