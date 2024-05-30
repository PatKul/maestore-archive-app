import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';
import { SortOrderEnum } from '../definitions';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sort-icon-button',
  template: `
    <button
      class="focus:outline-none text-gray-500 hover:text-blue-700 hover:scale-110"
      tabindex="-1"
      (click)="submit()"
    >
      @if (isDescending) {
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
          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
        />
      </svg>
      } @if (hasNoSort) {
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
          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      } @if (isAscending) {
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
          d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
        />
      </svg>
      }
    </button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortIconButtonComponent {
  name = input<string>();
  order = input<string>();

  @Output()
  clicked = new EventEmitter<string>();

  get isAscending() {
    return this.order() === SortOrderEnum.Asc;
  }

  get isDescending() {
    return this.order() === SortOrderEnum.Desc;
  }

  get hasNoSort() {
    return !this.isAscending && !this.isDescending;
  }

  submit() {
    if (!this.clicked) return;

    this.clicked.emit(this.name());
  }
}
