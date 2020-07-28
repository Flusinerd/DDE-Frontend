import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { usernameValidator } from '../shared/validators';
import { LoginService } from './login.service';
import { LoadingService } from '../loading.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _loginService: LoginService,
    private readonly _loadingService: LoadingService,
    private readonly _snackBarService: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required, usernameValidator]],
      password: ['', Validators.required],
    });
    this.loginForm.markAsTouched();
  }

  async onLogin(): Promise<void>{
    const values: ILoginForm = this.loginForm.value;
    this._loadingService.loading = true;
    try {
      await this._loginService.loginUser(values.username, values.password);
    } catch (error) {
      if (error instanceof HttpErrorResponse){
        this._snackBarService.open('Falsche Benutzerdaten', 'Schließen', {duration: 5000 });
      }
    }
    this._loadingService.loading = false;
  }
}

interface ILoginForm{
  username: string;
  password: string;
}
