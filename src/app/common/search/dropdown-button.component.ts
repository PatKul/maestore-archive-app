import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
  signal,
} from '@angular/core';

import { SearchField } from './definitions';
import { DownMarkButtonComponent } from './down-mark-button.component';
import { ModalDarkOverlayComponent } from '../overlay/modal-dark-overlay.component';

@Component({
  standalone: true,
  imports: [DownMarkButtonComponent, ModalDarkOverlayComponent],
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
})
export class DropdownButtonComponent {
  list = input<SearchField[]>([]);
  selectedKey = input<string>();

  displayValue = computed(() => {
    const selected = this.list().find(
      (field) => field.key === this.selectedKey()
    );
    return selected?.display || '';
  });

  @Output()
  selected = new EventEmitter<string>();

  dropdownVisible = signal(false);

  toggleDropdown() {
    this.dropdownVisible.set(!this.dropdownVisible());
  }

  select(field: SearchField) {
    this.dropdownVisible.set(false);
    this.selected.emit(field.key);
  }
}
