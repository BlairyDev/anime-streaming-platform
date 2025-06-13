import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const routes: Routes = [
     {
        path: '',
        component: HomePageComponent,
        title: 'Home'
    },
    {
        path: 'search/:id',
        component: SearchPageComponent,
        title: 'Search'
    }
];
