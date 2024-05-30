import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { SessionStore } from '../../+state/session.store';
import { PrimaryButtonComponent } from '../../common/buttons/primary-button.component';
import { TextBoxComponent } from '../../common/text/text-box.component';
import { LoginHeaderComponent } from './login-header.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    PrimaryButtonComponent,
    TextBoxComponent,
    LoginHeaderComponent,
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements AfterViewInit {
  readonly sessionStore = inject(SessionStore);
  readonly router = inject(Router);

  username = signal('');

  @ViewChild('passwordInputBox')
  passwordInputBox!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.username.set('');
    this.passwordInputBox.nativeElement.value = '';
  }

  login() {
    const password = this.passwordInputBox.nativeElement.value;

    this.sessionStore.login(this.username(), password, () => {
      this.router.navigate(['/sales/list']);
    });
  }

  passwordKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login();
    }
  }
}
