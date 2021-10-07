import { Component, Input } from '@angular/core';
import { AbstractControl } from "@angular/forms";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-120%)' }),
            animate('0.3s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.2s ease-in-out', style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class FormErrorComponent {

  @Input() control: AbstractControl | null = null;

  constructor() { }
}
