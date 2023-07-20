import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Boiler } from 'src/app/models/boiler';
import { Client } from 'src/app/models/client';
import { BoilerService } from 'src/app/services/boiler.service';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class BoilersListComponent implements OnInit{

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  clientList : Client [] = []

  displayedColumns: string[] = ['clientId', 'boilerId','email'];
  dataSource = new MatTableDataSource(this.clientList);

  constructor(private clientService : ClientsService , private _liveAnnouncer: LiveAnnouncer){}

  ngOnInit(): void {
    
    this.clientService.getAllClients().subscribe(
      (clients: Client[]) => {
        this.clientList = clients;
        console.log(this.clientList);
        this.dataSource = new MatTableDataSource(this.clientList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => {
        // Handle errors here
      }
    );

  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public doFilter = (value: string) => {
    if (value !== null) {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
  }

}
