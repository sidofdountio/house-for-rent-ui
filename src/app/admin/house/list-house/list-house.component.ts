import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { House } from 'src/app/model/house';
import { HouseService } from 'src/app/service/house.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit, AfterViewInit {


  dataSource = new MatTableDataSource<House>([]);
  displayedColumns: string[] = ['houseType', 'rentPrice', 'numBedrooms', 'numBathrooms', 'address', 'city'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:Router,private houseService:HouseService){

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void {
    this.houseService.houses()
    .subscribe(
      (response)=>{
        this.dataSource.data = response.data.houses;
      },
      (error)=>{

      }
    )

  }

  addNewHouse() {
    this.router.navigate(["/admin/add-house"])
  }

  Onselected(_t86: any) {
    alert("clicked");
  }

}
