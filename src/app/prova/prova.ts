import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-prova',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './prova.html',
  styleUrl: './prova.scss'
})
export class Prova implements OnInit, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck {

  constructor() {
    console.log('Constructor called');
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
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
