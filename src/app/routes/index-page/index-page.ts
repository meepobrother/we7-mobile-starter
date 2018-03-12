
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@core/settings.service';
@Component({
    selector: 'index-page',
    templateUrl: 'index-page.html',
    styleUrls: ['./index-page.scss']
})
export class IndexPage implements OnInit {
    options: any = {
        speed: 300,
        height: 120,
        loop: true,
        autoplay: {
            delay: 5000
        }
    };
    list: any[] = [];
    constructor(
        public setting: SettingsService
    ) { }

    ngOnInit() { 
        const record = this.setting.record;
        if(record){
            this.list = record['index.advs'];
        }
    }
}
