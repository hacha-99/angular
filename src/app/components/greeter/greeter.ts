import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  templateUrl: './greeter.html',
  styleUrl: './greeter.scss'
})
export class Greeter {
    messageGreeter = input.required();
}
