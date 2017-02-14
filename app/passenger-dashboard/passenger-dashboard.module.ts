import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
// Components
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
// Services
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PassengerDashboardService
  ],
  exports: [
    PassengerViewerComponent,
  ]
})
export class PassengerDashboardModule {}
