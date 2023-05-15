import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uv-ratio',
  templateUrl: './uv-ratio.component.html',
  styleUrls: ['./uv-ratio.component.sass']
})
export class UvRatioComponent implements OnInit {

  @Input() info: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
