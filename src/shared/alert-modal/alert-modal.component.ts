import { Component, Input, OnInit } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css'],
})
export class AlertModalComponent implements OnInit {
  @Input() message: string;
  @Input() tipo = 'success';

  constructor() // private modalService: BsModalService,
  // private modalRef: BsModalRef
  {}

  ngOnInit(): void {}
  onClose() {
    // this.modalRef.hide();
  }
}
