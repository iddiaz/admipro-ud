import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @Input('nombrepersonalizado') legend: string = 'Leyenda'; //Hacer esto no es una buena práctica por eso el error del linter, pero es un buen recurso cuando los nombres elegidos para las propiedades no son los mas correctos.
  @Input() progress: number = 50;

  @Output() changeVal: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('LEYENDA', this.legend);
    console.log('PROGRESS', this.progress);
   }

  ngOnInit() {
  }

  changeValue( val ) {

    if (this.progress >= 100 && val > 0 ) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && val < 0 ) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + val;
    console.log(`progreess = ${this.progress}`);

    this.changeVal.emit(this.progress);
  }

}
