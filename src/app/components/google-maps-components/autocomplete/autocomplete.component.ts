/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';


declare let google: any;

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass']
})
export class AutocompleteComponent implements OnInit {
  
  @Output() setAddress: EventEmitter<any> = new EventEmitter();

  options={
  }

  constructor() { }

  ngOnInit(): void {
  }

  addressChange(address: any) {
    this.setAddress.emit(address);
  }

}
