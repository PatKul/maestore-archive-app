import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-icon-button',
  template: `
    <button
      class="focus:outline-none focus:ring-1  bg-blue-800 hover:bg-blue-700 rounded-full border border-white p-1 opacity-80 text-white"
      (click)="onClick()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-4"
      >
        <path
          fill-rule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserIconButtonComponent {
  @Output()
  clicked = new EventEmitter<never>();

  onClick() {
    this.clicked.emit();
  }
}
