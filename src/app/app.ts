import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { DogCardComponent } from './DogComponent/dogCard';
import { ButtonComponent } from './button-component/button-component';
import { InputLive } from './input-live/input-live';
import { Persona } from './persona/persona';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DogCardComponent,
    ButtonComponent,
    InputLive,
    Persona],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LearningAngular');
  isVisible: boolean = true;
  isFor: boolean = true;
  isSwitch: boolean = !this.isFor;
}
