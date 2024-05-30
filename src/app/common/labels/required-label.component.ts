import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-required-label',
  template: `
    <label class="block text-sm font-medium text-gray-600">
      <ng-content></ng-content> *
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequiredLabelComponent {}
