import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
]

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    //Custom Modules
    PassengerDashboardModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
