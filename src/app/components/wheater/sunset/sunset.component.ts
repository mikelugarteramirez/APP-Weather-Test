import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunset',
  templateUrl: './sunset.component.html',
  styleUrls: ['./sunset.component.sass']
})
export class SunsetComponent implements OnInit {

  @Input() info: any = '';
  @Input() sunrise: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
