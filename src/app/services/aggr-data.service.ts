import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stat } from '../models/stat';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AggrDataService {

  constructor(private http : HttpClient) { }

  url : string = "http://34.202.74.94:8081/api/monitoringbe/aggregatedData/"

  getAlertsList() : Observable <Stat[]>{
    const url = this.url + 'getAll';
    return this.http.get<Stat[]>(url);
  }

  getByBoilerId(id : string | null) : Observable <Stat[]>{
    const url = this.url + 'getByBoilerId/' + id;
    return this.http.get<Stat[]>(url);
  }
}