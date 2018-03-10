import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { We7Service } from '../we7.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CheckRunnerGuard implements CanActivate {
    constructor(
        public http: HttpClient,
        public we7: We7Service
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (isDevMode()) {
            return true;
        }
        return this.http.get<boolean>(this.we7.getMobileUrl('checkrunner'));
    }
}