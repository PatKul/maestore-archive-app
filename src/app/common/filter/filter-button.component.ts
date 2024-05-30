import { Component, EventEmitter, Output, input, signal } from '@angular/core';

import { FilterValue } from './definitions';
import { FilterMarkButtonComponent } from './filter-mark-button.component';
import { ModalDarkOverlayComponent } from '../overlay/modal-dark-overlay.component';

@Component({
  standalone: true,
  imports: [FilterMarkButtonComponent, ModalDarkOverlayComponent],
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
})
export class FilterButtonComponent {
  list = input<{ id: number; name: string }[]>();

  @Output()
  selected = new EventEmitter<number>();

  dropdownVisible = signal(false);

  toggleDropdown() {
    this.dropdownVisible.set(!this.dropdownVisible());
  }

  select(id: number) {
    this.selected.emit(id);
    this.toggleDropdown();
  }
}
