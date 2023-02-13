import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  num: number = 0;
  mayorMenor: string = '(Introduce un numero)';
  numSecret: number = this.numAleatorio(1, 10);
  constructor(
  ) {}

  numAleatorio(min: number | number, max: number) {
    return Math.round(Math.random() * (max - min) + parseInt(min.toString(),10));
  }
  compruebaNumero() {
    if (this.num > this.numSecret) {
      this.mayorMenor = 'menor que ';
    } else if (this.num < this.numSecret) {
      this.mayorMenor = 'mayor que ';
    } else {
      this.mayorMenor = 'Has acertado! El numero era ';
    }
  }
  reinicia() {
    this.num = 0;
    this.numSecret = this.numAleatorio(0, 100);
    this.mayorMenor = '';
  }
}
