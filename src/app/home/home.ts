import { Component, signal } from '@angular/core';
import { Greeter } from '../components/greeter/greeter';
import { Counter } from '../components/counter/counter';

@Component({
    selector: 'app-home',
    imports: [Greeter, Counter],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home {
    messageHome = signal("Greetings from a variable from home component!");

    keyUpHandler(event: KeyboardEvent) {
        console.log(`User pressed ${event.key}.`);
    }
}
