import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelRoutingModule } from './intel-routing.module';
import { IntelBrowserComponent } from './intel-browser/intel-browser.component';


@NgModule({
  declarations: [IntelBrowserComponent],
  imports: [
    CommonModule,
    IntelRoutingModule
  ]
})
export class IntelModule { }
