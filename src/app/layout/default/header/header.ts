import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '@core/sidebar.service';
import { PopupComponent } from "ngx-weui/popup";
@Component({
    selector: 'app-header',
    templateUrl: 'header.html',
    styleUrls: ['./header.scss']
})

export class HeaderComponent implements OnInit {
    @ViewChild('simple') simplePopup: PopupComponent;
    loading: boolean = true;
    constructor(
        public sidebar: SidebarService
    ) { }

    ngOnInit() { }
}