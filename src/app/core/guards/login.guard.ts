import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { We7Service } from '../we7.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
@Injectable()
export class CheckLoginGuard implements CanActivate {
    constructor(
        public http: HttpClient,
        public we7: We7Service
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (isDevMode()) {
            return true;
        }
        return this.http.get<any>(this.we7.getMobileUrl('checklogin'))
            .switchMap((res: any) => {
                return of(res.status === 1)
            });
    }
}