import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  @Input()
  content:string = "";

  @Input()
  titolo: string = "";

  @Input()
  type: "type_warning" | "type_error" | "type_success" = "type_success";

  ngOnInit(): void {
  }

}
