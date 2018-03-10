import { Component, OnInit } from '@angular/core';
import { We7Service } from '@core/we7.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'register-page',
    templateUrl: 'register-page.html',
    styleUrls: ['./register-page.scss']
})
export class RegisterPage implements OnInit {
    form: FormGroup;
    constructor(
        public app: We7Service,
        public http: HttpClient,
        public fb: FormBuilder,
        public router: Router
    ) {
        this.form = this.fb.group({
            realname: '',
            mobile: '',
            password: '',
            rePassword: '',
            cid: '',
            code: ''
        });
    }

    ngOnInit() {

    }

    register() {
        const url = this.app.getMobileUrl('doRegister');
        this.http.post(url, this.form.value).subscribe(res => {
            this.router.navigate(['/login']);
        });
    }
}