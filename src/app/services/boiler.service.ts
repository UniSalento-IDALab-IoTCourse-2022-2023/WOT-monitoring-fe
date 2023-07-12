import { Injectable } from '@angular/core';
import { Boiler } from '../models/boiler';
import { Detail } from '../models/detail';
import { Stat } from '../models/stat';

@Injectable({
  providedIn: 'root'
})
export class BoilerService {

  constructor() { }

  getBoilerList() : Boiler[]{
    return [
      { id : "1a2b3c4d", email : "rob@mail.com" },
      { id : "5e6f7g8i", email : "mat@mail.com" }
   ]
  }

  getBoiler(id : string) : Boiler{
    return { id : "1a2b3c4d", email : "rob@mail.com" }
  }

  getLastStat(id : string) : Stat{
    return { temperature: 20, pressure: 1, carbonMonoxideLevel: 12000, performance : 85 , state : "OK" }
  }

  getStats(id : string) : Stat[]{
    return [
      { temperature: 20, pressure: 1, carbonMonoxideLevel: 0.5, performance : 90 , state : "OK" },
      { temperature: 21, pressure: 1, carbonMonoxideLevel: 0.5, performance : 90 , state : "OK" },
      { temperature: 22, pressure: 1, carbonMonoxideLevel: 0.5, performance : 90 , state : "OK" },
      { temperature: 23, pressure: 1, carbonMonoxideLevel: 0.5, performance : 90 , state : "OK" },
    ]
  }
}
