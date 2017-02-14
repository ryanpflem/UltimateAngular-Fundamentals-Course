import { NgModel } from '@angular/forms/src/directives';
import { type } from 'os';
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

      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
            Yes
        </label>        
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in data:
        <input 
          type="datetime"
          name="checkInDate"
          [ngModel]="detail?.checkInDate | date: 'yMMMMd' | uppercase">
      </div>

      <pre>{{form.value | json}}</pre>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  toggleCheckIn(checkedIn: boolean) {
    console.log(checkedIn);
    if (checkedIn) {
      this.detail.checkInDate = Date.now(); // ms value
    }
  }
}
