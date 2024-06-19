import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebsiteComponent } from './website/website.component';
import { ListHouseComponent } from './admin/house/list-house/list-house.component';

const routes: Routes = [
  {
    path: 'home',
    component: WebsiteComponent,
    title: 'home',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    title: 'page-not-found'
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRouteComponent = [
  PageNotFoundComponent,
  HousesComponent
]
