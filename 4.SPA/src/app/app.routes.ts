import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forChild(ROUTES);
