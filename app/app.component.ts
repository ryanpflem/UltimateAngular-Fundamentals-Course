import { bindDirectiveAfterViewLifecycleCallbacks } from '@angular/compiler/src/view_compiler/lifecycle_binder';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1>{{title + '!'}}</h1>
      <img [src]="logo">
      <input type="text" [value]="name">
      <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg';
  name: string = 'Ryan';

  constructor() {
    this.title = 'Ultimate Angular';
  }

}
