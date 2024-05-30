import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-title',
  template: `
    <h1 class="text-lg font-semibold text-green-600">
      <div class="flex gap-x-2 items-center">
        <ng-content></ng-content>

        <span>{{ title() }}</span>
      </div>
    </h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  title = input<string>('');
}
