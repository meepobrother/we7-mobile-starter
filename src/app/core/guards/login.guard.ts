import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { We7Service } from '../we7.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CheckLoginGuard implements CanActivate {
    constructor(
        public http: HttpClient,
        public we7: We7Service
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.http.get<boolean>(this.we7.getMobileUrl('checklogin'));
    }
}