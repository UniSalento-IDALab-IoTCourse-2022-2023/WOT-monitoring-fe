import { Injectable } from '@angular/core';
import { Alert } from '../models/alerts';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  getAlertsList() : Alert[]{
    return [
      { alertId : "123", boilerId : "1a2b3c4d", date : "2021-04-01", solved : false },
      { alertId : "456", boilerId : "5e6f7g8i", date : "2021-04-02", solved : true }
  ]
  }

  getBoilerAlerts(id : string) : Alert[]{
    return [
      { alertId : "123", boilerId : "1a2b3c4d", date : "2021-04-01", solved : false },
      { alertId : "456", boilerId : "1a2b3c4d", date : "2021-04-02", solved : true },
      { alertId : "789", boilerId : "1a2b3c4d", date : "2021-04-03", solved : false },
      { alertId : "101", boilerId : "1a2b3c4d", date : "2021-04-04", solved : true },
      { alertId : "112", boilerId : "1a2b3c4d", date : "2021-04-05", solved : false },
      { alertId : "131", boilerId : "1a2b3c4d", date : "2021-04-06", solved : true },
      { alertId : "415", boilerId : "1a2b3c4d", date : "2021-04-07", solved : false },
  ]
  }
}
