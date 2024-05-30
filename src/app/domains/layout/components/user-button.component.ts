import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { UserIconButtonComponent } from './user-icon-button.component';
import { SessionStore } from '../../../+state';
import { ModalDarkOverlayComponent } from '../../../common/overlay/modal-dark-overlay.component';

@Component({
  standalone: true,
  imports: [UserIconButtonComponent, ModalDarkOverlayComponent],
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
})
export class UserButtonComponent {
  readonly route = inject(Router);
  readonly store = inject(SessionStore);

  dropdownVisible = signal(false);

  toggleDropdown() {
    this.dropdownVisible.set(!this.dropdownVisible());
  }

  viewProfile() {
    //this.route.navigate(['/app/user/profile']);
  }

  logout() {
    this.store.logout({
      afterLogout: () => this.route.navigate(['/login']),
    });
  }
}
