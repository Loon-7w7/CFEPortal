import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Devices } from 'src/app/core/models/Devices.model';
import { DevicesSevice } from 'src/app/services/implementation/Devices-service';
import { CreateMaterailModalComponent } from 'src/shared/components/create-materail-modal/create-materail-modal.component';

@Component({
  selector: 'cfe-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Devices[] = [];
  getDevices!: Observable<Devices[]>;
  iscreate: boolean = false;
  isLoading: boolean = false;
  contenedorStyles1: any = {};
  contenedorStyles2: any = {};
  constructor(private devicesSevice: DevicesSevice) {

  }
  ngOnInit(): void {
    this.getDevices = this.devicesSevice.get();
    this.getDevice();
  }

  getDevice(): void {
    this.isLoading = true;
    this.getDevices.subscribe(response => {
      if (response.length != 0) {
        this.devices = response;
      }
      this.isLoading = false;
    });
  }
  addData():void
  {
    this.contenedorStyles1 =
    {
      width: "45%",
      "border-right": "2px solid var(--color-secundario)",
    }
    this.contenedorStyles2 = 
    {
      width: "100%"
    }
  }
}
