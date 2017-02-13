import { NgModel } from '@angular/forms/src/directives';
import { bindDirectiveAfterViewLifecycleCallbacks } from '@angular/compiler/src/view_compiler/lifecycle_binder';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Get Value
      </button>

      <input 
        type="text" #username>
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {

  name: string = 'Ryan';

  handleClick(value: string) {
    console.log(value);
  }

}
