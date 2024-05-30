import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-filter-mark-button',
  template: `
    <button
      class="focus:outline-none focus:ring-1 focus:ring-blue-700 bg-gray-100 hover:bg-blue-200 rounded-full border border-blue-700 p-1"
      (click)="onClick()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 text-blue-700 hover:text-blue-800"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
        />
      </svg>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterMarkButtonComponent {
  @Output()
  clicked = new EventEmitter<never>();

  onClick() {
    this.clicked.emit();
  }
}
