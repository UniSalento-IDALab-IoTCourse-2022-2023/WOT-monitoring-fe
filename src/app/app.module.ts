import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoilersListComponent } from './components/client-list/client-list.component';
import { BoilerService } from './services/boiler.service';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailsComponent } from './components/details/details.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoilersListComponent,
    DetailsComponent,
    AlertsComponent,
    TopNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
  ],
  providers: [
    BoilerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
