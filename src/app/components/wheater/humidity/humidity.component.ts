import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.sass']
})
export class HumidityComponent implements OnInit {
  @Input() info: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
