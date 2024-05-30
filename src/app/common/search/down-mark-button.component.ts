import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-down-mark-button',
  template: `
    <button
      class="focus:outline-none focus:ring-1 focus:ring-blue-700 bg-white hover:text-blue-500  border border-gray-300 px-3 py-1.5"
      (click)="onClick()"
    >
      <div
        class="flex gap-x-1 items-center px-1 text-blue-600 w-full justify-center"
      >
        <span class="text-sm font-semibold">{{ value() }}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownMarkButtonComponent {
  value = input<string>();

  @Output()
  clicked = new EventEmitter<never>();

  onClick() {
    this.clicked.emit();
  }
}
