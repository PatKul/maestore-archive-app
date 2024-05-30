import { Component, EventEmitter, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-text-box',
  template: `
    <input
      type="text"
      class="border border-gray-400 px-3 py-1.5 text-sm rounded-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-blue-600 w-full"
      autofocus
      [placeholder]="placeholder()"
      [ngModel]="text()"
      (input)="onInput($event)"
    />
  `,
})
export class TextBoxComponent {
  text = input<string>('');
  placeholder = input<string>('');

  @Output()
  onChange = new EventEmitter<string>();

  onInput(event: Event) {
    this.onChange.emit((event.target as HTMLInputElement).value);
  }
}
