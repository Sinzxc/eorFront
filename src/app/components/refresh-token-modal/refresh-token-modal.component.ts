import { Component,ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-refresh-token-modal',
  templateUrl: './refresh-token-modal.component.html'  // Убедитесь, что у вас есть соответствующий файл HTML
})
export class RefreshTokenModalComponent {

  constructor(private modalService: NgbModal) {}
  
}
