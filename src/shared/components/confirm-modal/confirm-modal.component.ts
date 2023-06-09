import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'cfe-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
  @Output() confirmEvent = new EventEmitter<void>();
  @Output() cancelEvent = new EventEmitter<void>();
  @Input() mesagge: string = '';

  confirm() {
    this.confirmEvent.emit();
  }

  cancel() {
    this.cancelEvent.emit();
  }
}
