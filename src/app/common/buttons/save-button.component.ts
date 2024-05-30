import { CommonModule } from '@angular/common';
import {
  Output,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-save-button',
  template: `
    <button
      class=" text-white py-2 px-4 hover:bg-green-700 transition-colors text-sm rounded-sm"
      [ngClass]="{ 'bg-gray-300': !enabled(), 'bg-green-600': enabled() }"
      (click)="onClick()"
    >
      <div class="flex gap-x-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4"
        >
          <path
            fill-rule="evenodd"
            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          />
        </svg>

        <span>Save</span>
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaveButtonComponent {
  enabled = input<boolean>(true);
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.enabled) return;

    this.clicked.emit();
  }
}
