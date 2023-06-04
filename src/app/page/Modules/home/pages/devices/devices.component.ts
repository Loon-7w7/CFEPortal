import { Component, ViewChild } from '@angular/core';
import { CreateMaterailModalComponent } from 'src/shared/components/create-materail-modal/create-materail-modal.component';

@Component({
  selector: 'cfe-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {

  @ViewChild(CreateMaterailModalComponent)formModal!: CreateMaterailModalComponent;
  modalOpen: boolean = false;
  openModal(): void {
    this.modalOpen = true;
  }
  openFormModal() {

  }
  handleFormSubmit() {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado desde el componente principal');
  }
  closeModal(): void {
    this.modalOpen = false;
  }
}
