import { FormControl } from '@angular/forms';

export function usernameValidator(control: FormControl){
  const username: string = control.value;
  if (username.includes('@')) {
    return {
      username: 'Containes "@"'
    }
  }
  return null;
}