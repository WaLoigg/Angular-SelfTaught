import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-live',
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './input-live.html',
  styleUrl: './input-live.scss'
})
export class InputLive {

  title = 'Food';

  onClick(eventButton: any) {
    alert('You clicked the button!');
    // console.log('Button clicked');
    console.log(eventButton);
  }

  onInput(eventInput: Event) {
    console.log('Input event:', (<HTMLInputElement>eventInput.target).value);
    this.title = (<HTMLInputElement>eventInput.target).value;
  }

  onTwoWayClick(eventButton: any) {
    this.title = 'Two Way Binding';
  }

}
