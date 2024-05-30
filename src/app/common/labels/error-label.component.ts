import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-error-label',
  template: `
    <span class="text-sm font-semibold text-orange-500">{{ message() }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLabelComponent {
  message = input('');
}
