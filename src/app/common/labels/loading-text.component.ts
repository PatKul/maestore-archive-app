import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loading',
  template: `
    <div class="flex gap-x-2 font-semibold text-sm text-green-600 items-center">
      <div
        class="animate-ping h-2 w-2 rounded-full opacity-75 bg-green-600"
      ></div>
      <span>loading...</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingTextComponent {}
