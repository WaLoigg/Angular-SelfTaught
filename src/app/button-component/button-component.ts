import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-component',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss'
})
export class ButtonComponent implements OnInit {

  isDisabled = false;

  ngOnInit() : void {
    console.log('ngOnInit - ButtonComponent');
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 3000);

  }

}
