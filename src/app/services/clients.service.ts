import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url : string = "http://34.202.74.94:8081/api/monitoringbe/user/"

  constructor(private http : HttpClient) { }

  getAllClients(): Observable<Client[]> {
    const url = this.url + 'getAll';
    return this.http.get<Client[]>(url);
  }

  getByBoilerId(id : string | null){
    const url = this.url + 'getByBoilerId/' + id;
    return this.http.get<Client>(url);
  }

}
