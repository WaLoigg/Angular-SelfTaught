import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  imports: [],
  templateUrl: './persona.html',
  styleUrl: './persona.scss'
})
export class Persona {

  persone = [
    { nome: 'Mario', cognome: 'Rossi', eta: 30, isOnline: true },
    { nome: 'Luigi', cognome: 'Verdi', eta: 25, isOnline: false },
    { nome: 'Anna', cognome: 'Bianchi', eta: 28, isOnline: true }
  ]
  
  numero = 5;

}
