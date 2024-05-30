import { Component, input, effect } from '@angular/core';
import { ModalDarkOverlayComponent } from '../../overlay/modal-dark-overlay.component';

export interface ConfirmationDialogParams {
  message: string;
  yesCallback: any;
  noCallback?: any;
}

@Component({
  standalone: true,
  selector: 'app-confirmation-dialog',
  imports: [ModalDarkOverlayComponent],
  templateUrl: 'confirmation-dialog.component.html',
  styles: [],
})
export class ConfirmDialogComponent {
  params = input<ConfirmationDialogParams>({
    message: '',
    yesCallback: null,
    noCallback: null,
  });
  show = input<boolean>(false);
  _isVisible = false;

  /**
   * Constructor
   */
  constructor() {
    effect(() => {
      if (this.show()) {
        this._isVisible = true;
      }
    });
  }

  yes() {
    this._isVisible = false;

    if (this.params().yesCallback) this.params().yesCallback();
  }

  no() {
    this._isVisible = false;

    if (this.params().noCallback) this.params().noCallback();
  }
}
