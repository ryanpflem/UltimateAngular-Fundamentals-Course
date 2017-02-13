import { NgModel } from '@angular/forms/src/directives';
import { bindDirectiveAfterViewLifecycleCallbacks } from '@angular/compiler/src/view_compiler/lifecycle_binder';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <input 
        type="text" 
        [ngModel]="name"
        (ngModelChange)="handleChange($event)">
      <div>{{name}}</div>
      <input 
        type="text" 
        [(ngModel)]="name">
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {

  name: string = 'Ryan';

  handleChange(value: string) {
    this.name = value;
  }

  handleClick() {
    this.name = "Fleming";
  }

}
