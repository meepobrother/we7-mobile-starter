import { HomePage } from './home-page/home-page';
import { IndexPage } from './index-page/index-page';
import { Routes } from '@angular/router';
import { CheckLoginGuard } from '@core/guards/login.guard';

import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';
import { ForgetPage } from './forget-page/forget-page';
import { DetailPage } from './detail-page/detail-page';
import { TaskResult } from './task-result/task-result';



export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
}, {
    path: 'home',
    component: HomePage,
    canActivate: [CheckLoginGuard]
}, {
    path: 'index',
    component: IndexPage
}, {
    path: 'login',
    component: LoginPage
}, {
    path: 'register',
    component: RegisterPage
}, {
    path: 'forget',
    component: ForgetPage
}, {
    path: 'detail',
    component: DetailPage
},{
    path: 'taskresult',
    component: TaskResult
}];

export const components = [
    HomePage,
    IndexPage,
    LoginPage,
    RegisterPage,
    ForgetPage,
    DetailPage,
    TaskResult
];
