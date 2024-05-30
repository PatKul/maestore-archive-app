import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-modal-dark-overlay',
  template: `
    <div
      class="fixed h-screen w-screen left-0 top-0 bg-black bg-opacity-20 z-[10]"
      (click)="onClick()"
    ></div>
  `,
})
export class ModalDarkOverlayComponent {
  @Output()
  clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
