import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddHouseComponent } from './house/add-house/add-house.component';
import { ListHouseComponent } from './house/list-house/list-house.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children:
      [
        {
          path: 'add-house',
          component: AddHouseComponent,
          title: "add-new-house"
        },
        {
          path: 'house',
          component: ListHouseComponent,
          title: "houses"
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
