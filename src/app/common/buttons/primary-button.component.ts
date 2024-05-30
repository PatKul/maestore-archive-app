import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-primary-button',
  template: `
    <button
      class="bg-green-600 text-white px-3 py-1.5 rounded-sm text-sm hover:bg-green-700 w-full"
      (click)="onClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class PrimaryButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
