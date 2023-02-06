import { Component } from '@angular/core';

@Component({ // Known as the 'root component' - required.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pelart';
}
