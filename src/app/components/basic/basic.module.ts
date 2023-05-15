import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    ResponsiveMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    ResponsiveMenuComponent
  ]
})
export class BasicModule { }
