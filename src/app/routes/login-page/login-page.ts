import { Component, OnInit, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { We7Service } from '@core/we7.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.html',
    styleUrls: ['./login-page.scss']
})
export class LoginPage implements OnInit {
    form: FormGroup;
    constructor(
        public app: We7Service,
        public fb: FormBuilder,
        public http: HttpClient
    ) {
        this.form = this.fb.group({
            mobile: '',
            password: ''
        });
    }

    ngOnInit() { 
        this.app.autoLogin();
    }

    login() {
        if (isDevMode()) {
            this.app.loginSuccess({ id: 1 });
            return;
        }
        const url = this.app.getMobileUrl('doLogin');
        this.http.post(url, this.form.value).subscribe((res: any) => {
            if (res.status === 0) {
                // 登录成功
                this.app.loginSuccess({id: res.uid});
            } else {
                // 登录失败
                this.app.tip(res.message);
            }
        });
    }
}