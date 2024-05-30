import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-secondary-button',
  template: `
    <button
      class="bg-gray-100 px-3 py-1.5  rounded-sm text-sm hover:bg-gray-200 w-full transition-colors"
      [ngClass]="{
        'text-gray-300': !enabled(),
        'text-blue-500': enabled()
      }"
      (click)="onClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class SecondaryButtonComponent {
  enabled = input<boolean>(true);

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.enabled()) return;

    this.clicked.emit();
  }
}
