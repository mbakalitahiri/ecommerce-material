import { Injectable } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor() // private modalRef: BsModalRef // private modalService: BsModalService,
  {}

  handleEvent(tipo: string, message: string) {
    // this.modalRef = this.modalService.show(AlertModalComponent);
    // this.modalRef.content.tipo = tipo;
    // this.modalRef.content.message = message;
  }
}
