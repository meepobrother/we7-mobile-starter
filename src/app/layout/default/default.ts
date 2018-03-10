import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@core/sidebar.service';
@Component({
    selector: 'layout-default',
    templateUrl: 'default.html'
})
export class DefaultComponent implements OnInit {
    constructor(
        public sidebar: SidebarService
    ) { }

    ngOnInit() { }

    onLoadMore(e: any) { }
}