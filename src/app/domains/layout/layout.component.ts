import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-layout',
  template: `
    <div class="h-screen w-full overflow-hidden">
      <app-header></app-header>

      <div class="h-full bg-gray-100 p-2 w-full">
        <router-outlet></router-outlet>
      </div>
    </div>

    <footer class="fixed bottom-0 w-full">
      <div class="flex justify-center items-center py-2 text-blue-300">
        <span class="text-xs">
          Copyright <span>&copy; 2024</span> |
          <a
            href="http://wave2systems.com"
            target="_blank"
            class="text-blue-400 hover:text-blue-600"
          >
            Wave2 Systems</a
          ></span
        >
      </div>
    </footer>
  `,
})
export class LayoutComponent {}
