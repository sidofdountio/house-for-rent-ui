import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { MatSelectModule } from '@angular/material/select';


import { AdminRoutingModule } from './admin-routing.module';
import { ListHouseComponent } from './house/list-house/list-house.component';
import { AddHouseComponent } from './house/add-house/add-house.component';


@NgModule({
  declarations: [
    ListHouseComponent,
    AddHouseComponent
  ],
  imports: [
    MatSelectModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
