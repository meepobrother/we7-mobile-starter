import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@core/sidebar.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.html',
    styleUrls: ['./header.scss']
})

export class HeaderComponent implements OnInit {

    loading: boolean = true;
    constructor(
        public sidebar: SidebarService
    ) { }

    ngOnInit() { }
}