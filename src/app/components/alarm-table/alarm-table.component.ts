import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'src/app/models/alerts';
import { Boiler } from 'src/app/models/boiler';
import { Client } from 'src/app/models/client';
import { Stat } from 'src/app/models/stat';
import { AggrDataService } from 'src/app/services/aggr-data.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-alarm-table',
  templateUrl: './alarm-table.component.html',
  styleUrls: ['./alarm-table.component.scss']
})
export class AlarmTableComponent {

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  alertsList : Alert[] = []
  stat : Stat = {} as Stat
  statList : Stat[] = []
  boiler : Boiler = {} as Boiler
  client : Client = {} as Client
  
  constructor( 
    private route: ActivatedRoute, 
    private alertService : AlertsService, 
    private _liveAnnouncer: LiveAnnouncer 
    ) {}



    displayedColumns: string[] = ['alertId', 'alarmType', 'date'];
    dataSource = new MatTableDataSource(this.alertsList);

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        console.log(id); // Use the id parameter as needed
        this.getAlertsList(id);
      });
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

  getAlertsList(id : string | null){
    this.alertService.getByBoilerId(id).subscribe(
      (alerts: Alert[]) => {
        this.alertsList = alerts;
        console.log(this.alertsList);
        this.dataSource = new MatTableDataSource(this.alertsList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
    );
  }


}
