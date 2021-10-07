import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from "@angular/forms";

@Pipe({
  name: 'formatError'
})
export class FormatErrorPipe implements PipeTransform {

  transform(error: ValidationErrors | null | undefined): string {
    if (error) {
      if (error.hasOwnProperty('minlength')) {
        return `Es muss mindestens ${error.minlength.requiredLength} Zeichen haben.`;
      }
      if (error.hasOwnProperty('maxlength')) {
        return `Es darf maximal ${error.maxlength.requiredLength} Zeichen haben.`;
      }
      if (error.hasOwnProperty('pattern')) {
        return 'Der Wert entspricht nicht der erwarteten Form.';
      }
      if (error.hasOwnProperty('required')) {
        return 'Das Feld ist zwingend erforderlich.';
      }
    }
    return '';
  }

}
