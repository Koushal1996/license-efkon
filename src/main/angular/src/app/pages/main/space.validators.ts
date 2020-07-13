import { AbstractControl, ValidationErrors } from "@angular/forms";

export class SpaceValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).startsWith(" ")) {
      return { cannotContainSpace: true };
    }
    // if ((control.value as string).endsWith(" ")) {
    //   return { cannotContainSpace: true };
    // }
    return null;
  }
}
