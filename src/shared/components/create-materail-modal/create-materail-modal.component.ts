import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cfe-create-materail-modal',
  templateUrl: './create-materail-modal.component.html',
  styleUrls: ['./create-materail-modal.component.css']
})
export class CreateMaterailModalComponent {

  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  showModal = false;
  @Output() formSubmitted = new EventEmitter<void>();
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitForm() {
    this.formSubmitted.emit();
    this.showModal = false;
  }
}
