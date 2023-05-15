import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.sass']
})
export class VisibilityComponent implements OnInit {
  @Input() info: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
