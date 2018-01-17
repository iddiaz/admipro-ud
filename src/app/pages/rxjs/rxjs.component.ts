import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    let obs = new Observable( observer => {

      let contador = 1;

      let intervalo = setInterval( () => {

        contador += 1;
        observer.next( contador );

        if ( contador === 3) {
          observer.complete();
        }
      }, 1000);
    });

    obs.subscribe( numero => {
      console.log('SUBS', numero );
    });
  }

  ngOnInit() {
  }

}
