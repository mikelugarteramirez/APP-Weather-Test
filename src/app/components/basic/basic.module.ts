import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';
import { ModalComponent } from './modal/modal.component';
import { WheaterModule } from '../wheater/wheater.module';



@NgModule({
  declarations: [
    MenuComponent,
    ResponsiveMenuComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    WheaterModule
  ],
  exports: [
    MenuComponent,
    ResponsiveMenuComponent,
    ModalComponent
  ]
})
export class BasicModule { }
