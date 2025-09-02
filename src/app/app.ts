import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogCardComponent } from './DogComponent/dogCard';
import { ButtonComponent } from './button-component/button-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DogCardComponent,
    ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LearningAngular');
}
