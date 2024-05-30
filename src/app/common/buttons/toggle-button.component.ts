import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <button
      class="px-2 py-1 border  flex gap-x-1 items-center rounded-md"
      [ngClass]="{
        'text-green-700 border-green-700': checked(),
        'text-gray-400 border-gray-300': !checked()
      }"
      (click)="onToggle()"
    >
      @if (checked()) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      } @else {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      }

      <span class="text-xs">
        {{ label() }}
      </span>
    </button>
  `,
})
export class ToggleButtonComponent {
  label = input<string>();
  checked = input<boolean>();

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onToggle(): void {
    this.checkedChange.emit(!this.checked());
  }
}
