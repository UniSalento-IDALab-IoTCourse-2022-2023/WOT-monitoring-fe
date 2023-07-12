import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Alert } from 'src/app/models/alerts';
import { Boiler } from 'src/app/models/boiler';
import { Stat } from 'src/app/models/stat';
import { AlertsService } from 'src/app/services/alerts.service';
import { BoilerService } from 'src/app/services/boiler.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  
  constructor( private boilerService : BoilerService, private alertService : AlertsService , private _liveAnnouncer: LiveAnnouncer ) { }
  
  stat : Stat = this.boilerService.getLastStat("1a2b3c4d");
  boiler : Boiler = this.boilerService.getBoiler("1a2b3c4d");

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  alertsList : Alert[] = []

  displayedColumns: string[] = ['boilerId','alertId', 'date', 'solved'];
  dataSource = new MatTableDataSource(this.alertService.getBoilerAlerts("1a2b3c4d"));

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
