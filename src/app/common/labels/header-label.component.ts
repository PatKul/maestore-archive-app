import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header-label',
  template: ` <h1 class="text-lg font-semibold text-gray-400">
    {{ caption() }}
  </h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLabelComponent {
  caption = input<string>('');
}
