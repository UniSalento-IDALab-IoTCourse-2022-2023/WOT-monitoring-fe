import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Alert } from 'src/app/models/alerts';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  @ViewChild(MatSort)
  sort!: MatSort;

  alertsList : Alert[] = []

  displayedColumns: string[] = ['boilerId','alertId', 'alarmType', 'date'];
  dataSource = new MatTableDataSource(this.alertsList);

  constructor(private alertService : AlertsService , private _liveAnnouncer: LiveAnnouncer){}

  ngOnInit(): void {
    this.getAlertsList();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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

  getAlertsList(){
    this.alertService.getAll().subscribe(
      (alerts: Alert[]) => {
        this.alertsList = alerts;
        this.dataSource = new MatTableDataSource(this.alertsList);
        console.log(this.alertsList);
      },
    );
  }

}
