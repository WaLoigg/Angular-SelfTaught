import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-dog-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './dogCard.html',
  styleUrl: './dogCard.scss'
})
export class DogCardComponent implements OnInit, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck {

    dogDisplayed= [{name: '', breed: ''}];

    dog = [
      {name: 'Lassie', breed: 'Collie'},
      {name: 'Rin Tin Tin', breed: 'German Shepherd'}
    ];

    imageSrc= ''
    collieImage= 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lassie.jpg/500px-Lassie.jpg';
    germanShepherdImage= 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rin_Tin_Tin_1929.JPG/500px-Rin_Tin_Tin_1929.JPG';
    
    longText = `This is an example of property binding.
    The dog name, breed, and image are all properties of the component class.`;

  constructor() {
    console.log('Constructor called');
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    let counter = 0;
    setInterval(() => {
      if (counter % 2 === 0) {
        this.dogDisplayed[0] = this.dog[0];
        this.imageSrc = this.collieImage
      } else {
        this.dogDisplayed[0] = this.dog[1];
        this.imageSrc = this.germanShepherdImage;
      }
      counter++;
    } , 3000);
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngDoCheck(): void {
    console.log('ngDocheck called');
  }

}
