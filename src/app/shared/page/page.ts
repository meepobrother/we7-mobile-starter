import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'page',
    templateUrl: 'page.html'
})

export class Page implements OnInit {
    @HostBinding('class.page') _page: boolean = true;
    constructor() { }
    ngOnInit() { }
}