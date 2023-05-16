import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';



@NgModule({
  declarations: [
    AutocompleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GooglePlaceModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class GoogleMapsComponentsModule { }
