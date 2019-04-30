import { Component } from '@angular/core';

/**
 * Generated class for the ProspectShowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'prospect-show',
  templateUrl: 'prospect-show.html'
})
export class ProspectShowComponent {

  text: string;

  constructor() {
    console.log('Hello ProspectShowComponent Component');
    this.text = 'Hello World';
  }

}
