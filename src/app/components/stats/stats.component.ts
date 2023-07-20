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
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  alertsList : Alert[] = []
  stat : Stat = {} as Stat
  statList : Stat[] = []
  boiler : Boiler = {} as Boiler
  client : Client = {} as Client
  
  constructor( 
    private route: ActivatedRoute, 
    private clientService : ClientsService,
    private alertService : AlertsService, 
    private aggrDataService : AggrDataService, 
    private _liveAnnouncer: LiveAnnouncer 
    ) {}

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'date', 'temperatureAverageData', 'pressureAverageData', 'carbonMonoxideAverageData', 'performanceAverageData'];
  dataSource = new MatTableDataSource(this.statList);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id); // Use the id parameter as needed
      this.getStats(id);
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

  getStats(id : string | null){
    this.aggrDataService.getByBoilerId(id).subscribe(
      (stats: Stat[]) => {
        this.statList = stats;
        this.stat = this.statList[this.statList.length - 1];
        this.dataSource = new MatTableDataSource(this.statList);
        console.log(this.stat);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      );
    }

}
