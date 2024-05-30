import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-close-icon-button',
  template: `
    <button class="text-red-800 hover:text-red-600" (click)="close()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke-width="2"
        class="w-4 h-4"
      >
        <path
          fill-rule="evenodd"
          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseIconButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  close() {
    this.clicked.emit();
  }
}
