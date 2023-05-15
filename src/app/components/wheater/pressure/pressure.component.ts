import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.sass']
})
export class PressureComponent implements OnInit {

  @Input() info: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
