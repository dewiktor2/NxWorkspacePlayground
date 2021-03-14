import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxTestComponent } from './nx-test/nx-test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NxTestComponent],
  exports: [NxTestComponent],
})
export class SharedUiModule {}
