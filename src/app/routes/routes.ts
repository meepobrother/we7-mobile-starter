import { HomePage } from './home-page/home-page';
import { IndexPage } from './index-page/index-page';
import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
}, {
    path: 'home',
    component: HomePage
}, {
    path: 'index',
    component: IndexPage
}];

export const components = [
    HomePage,
    IndexPage
];
