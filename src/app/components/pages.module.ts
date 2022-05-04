import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavHeaderComponent],
  exports: [NavHeaderComponent],
})
export class ComponentsModule {}
