import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      <pre>{{detail | json}}</pre>
      <div>
        Passenger name:
        <input
          type="text" 
          name="fullname"
          [ngModel]="detail?.fullname">
      </div>
      <div>
        Passenger id:
        <input
          type="number" 
          name="id"
          [ngModel]="detail?.id">
      </div>
      <pre>{{form.value | json}}</pre>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
}
