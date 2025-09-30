import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
    <app-header />
    <app-home />
  `,
  styles: [
    `h1 {
        background-color: #aeaeaeff;
        padding: 1rem;
        border-radius: 10px;
        width: fit-content;
    }`
  ],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
