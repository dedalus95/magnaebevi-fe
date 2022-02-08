import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/common/modale/modale.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor( private modalService: NgbModal) { }


  public showModal(titolo:string, content:string, type:string){
    const modale = this.modalService.open(ModalComponent)
        modale.componentInstance.titolo = titolo;
        modale.componentInstance.content = content;
        modale.componentInstance.type = type;
  }
}
