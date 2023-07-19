import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoilersListComponent } from './components/client-list/client-list.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path : '', redirectTo: 'boilers', pathMatch: 'full' },
  { path : 'boilers', component: BoilersListComponent },
  { path : 'alerts', component: AlertsComponent},
  { path : 'boilers/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
