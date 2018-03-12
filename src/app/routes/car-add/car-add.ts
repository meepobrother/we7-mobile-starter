import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7Service } from '@core/we7.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'car-add',
    templateUrl: 'car-add.html',
    styleUrls: ['./car-add.scss']
})
export class CarAddPage implements OnInit {
    id: string = '0';
    form: FormGroup;
    constructor(
        public http: HttpClient,
        public app: We7Service,
        public router: Router,
        public location: Location,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            carNum: '',
            jarNum: '',
            licheng: '',
            realname: '',
            mobile: ''
        });
    }

    ngOnInit() {
        this.op = this.app.get('op');
        this.form.get('carNum').setValue(decodeURI(this.app.get('carNum')));
    }

    cancel() {
        this.location.back();
    }

    private postToSave() {
        const url = this.app.getMobileUrl('postmycar', {});
        return this.http.post(url, this.form.value)
    }

    save() {
        if (isDevMode()) {
            this.router.navigate(['home'], { queryParams: { carId: '1' } });
            return;
        }
        this.postToSave().subscribe((res: any) => {
            if (res.status === 0) {
                const { data } = res;
                localStorage.setItem('carfiles:' + data.id, JSON.stringify(data));
                this.router.navigate(['home'], { queryParams: { cardId: res.id } });
            } else {
                console.log(res);
            }
        });
    }
    op: string;
    add() {
        if (isDevMode()) {
            this.router.navigate(['billing'], { queryParams: { cardId: 1 } });
            return;
        }
        this.postToSave().subscribe((res: any) => {
            if (res.status === 0) {
                const { data } = res;
                localStorage.setItem('carfiles:' + data.id, JSON.stringify(data));
                this.router.navigate(['billing'], { queryParams: { cardId: res.id } });
            } else {
                console.log(res);
            }
        });
    }
}
