import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() information: any;
  @Output() setClose: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
  }

  close() {
    this.setClose.emit(false)
  }

}
