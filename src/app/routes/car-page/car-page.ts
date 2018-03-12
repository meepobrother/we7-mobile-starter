import { Component, OnInit } from '@angular/core';
import { We7Service } from '@core/we7.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'car-page',
    templateUrl: './car-page.html',
    styleUrls: ['./car-page.scss']
})
export class CarPage implements OnInit {
    page: number = 0;
    psize: number = 20;
    list: any[] = [];
    constructor(
        public http: HttpClient,
        public app: We7Service,
        public router: Router
    ) { }

    ngOnInit() {
        this.init();
    }

    init() {
        const url = this.app.getMobileUrl('getcarlist', { page: this.page, psize: this.psize });
        this.http.get(url).subscribe((res: any[]) => {
            this.list = res;
        });
    }

    addCar() {
        this.router.navigate(['carNum'], { queryParams: { op: 'mine' } });
    }
}
