import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-check-label',
  template: `
    @if (checked()) {
    <div class="text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </div>
    } @else {
    <div class="text-orange-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckLabelComponent {
  checked = input<boolean>(false);
}
