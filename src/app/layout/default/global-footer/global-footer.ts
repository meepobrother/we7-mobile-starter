import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'global-footer',
    templateUrl: 'global-footer.html'
})

export class GlobalFooter implements OnInit {
    @Input() setting: any = {
        copyright: ``,
        navs: []
    };
    year: any;
    constructor() {
        this.year = new Date().getFullYear();
        this.setting.copyright = `Copyright © 2008-${this.year} meepo.com.cn`;
        this.setting.navs.push({
            title: '米波网络',
            link: 'https://meepo.com.cn'
        });
    }

    ngOnInit() { 
    }
}