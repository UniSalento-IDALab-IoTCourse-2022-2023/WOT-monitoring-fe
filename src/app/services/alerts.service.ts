import { Injectable } from '@angular/core';
import { Alert } from '../models/alerts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private http : HttpClient) { }

  url : string = "http://34.202.74.94:8081/api/monitoringbe/alarm/"

  getAll() : Observable <Alert[]>{
    const url = this.url + 'getAll';
    return this.http.get<Alert[]>(url);
  }

  getByBoilerId(id : string | null) : Observable <Alert[]>{
    const url = this.url + 'getByBoilerId/' + id;
    return this.http.get<Alert[]>(url);
  }
}
