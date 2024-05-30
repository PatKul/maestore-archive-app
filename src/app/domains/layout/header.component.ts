import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { SessionStore } from '../../+state';
import { UserButtonComponent } from './components';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, UserButtonComponent],
  selector: 'app-header',
  template: `
    <div
      class="flex justify-between items-center px-3 py-3 border-b border-gray-200 bg-blue-900"
    >
      <div class="text-xl font-semibold text-white">
        Maestrore Archive - Sales
      </div>

      <div class="flex gap-x-2 items-center">
        <app-user-button />
      </div>
    </div>
  `,
})
export class HeaderComponent {
  readonly router = inject(Router);
  readonly sessionStore = inject(SessionStore);

  logout() {
    this.sessionStore.logout({
      afterLogout: () => {
        this.router.navigate(['/login']);
      },
    });
  }
}
