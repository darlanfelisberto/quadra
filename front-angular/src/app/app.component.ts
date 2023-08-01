import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <p-toast></p-toast>
    <div class="container">
      <app-header class="header height-size-he-foo"/>
      <main>
        <app-nav/>
        <app-main/>
      </main>

    <app-header></app-header>
    </div>
  `,
  styles: [`
  `],
})
export class AppComponent {
  title = 'front-angular';

  constructor(public router:Router){
    console.log(router.config)
  }
}
