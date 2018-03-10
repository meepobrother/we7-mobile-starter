import { Component, OnInit } from '@angular/core';
import { We7Service } from '@core/we7.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'forget-page',
    templateUrl: 'forget-page.html',
    styleUrls: ['./forget-page.scss']
})
export class ForgetPage implements OnInit {
    form: FormGroup;
    constructor(
        public app: We7Service,
        public fb: FormBuilder,
        public http: HttpClient,
        public router: Router
    ) {
        this.form = this.fb.group({
            mobile: '',
            password: '',
            repassword: '',
            code: '',
            code_id: ''
        });
    }

    ngOnInit() { }

    post() {
        let url = this.app.getMobileUrl('doforget');
        this.http.post(url, this.form.value).subscribe((res: any) => {
            if (res.status === -1) {
                alert(res.msg)
            } else {
                this.router.navigate(['/login']);
            }
        });
    }
}