import { Component } from '@angular/core';
import { Greeter } from '../components/greeter/greeter';

@Component({
  selector: 'app-home',
  imports: [Greeter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
