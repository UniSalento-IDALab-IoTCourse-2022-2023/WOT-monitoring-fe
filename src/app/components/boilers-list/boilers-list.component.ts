import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Boiler } from 'src/app/models/boiler';
import { BoilerService } from 'src/app/services/boiler.service';

@Component({
  selector: 'app-boilers-list',
  templateUrl: './boilers-list.component.html',
  styleUrls: ['./boilers-list.component.scss']
})
export class BoilersListComponent implements OnInit{

  @ViewChild(MatSort)
  sort!: MatSort;

  boilerList : Boiler[] = []

  displayedColumns: string[] = ['id', 'email'];
  dataSource = new MatTableDataSource(this.boilerList);

  constructor(private boilerService : BoilerService , private _liveAnnouncer: LiveAnnouncer){}

  ngOnInit(): void {
    this.boilerList = this.boilerService.getBoilerList()
    this.dataSource = new MatTableDataSource(this.boilerList);
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

}
