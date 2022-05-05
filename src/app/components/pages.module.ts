import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavHeaderComponent, FooterComponent],
  exports: [NavHeaderComponent, FooterComponent],
})
export class ComponentsModule {}
