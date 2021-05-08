import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromNowPipe } from './from-now.pipe';

@NgModule({
  declarations: [FromNowPipe],
  imports: [
    CommonModule
  ],
  exports: [FromNowPipe]
})
export class ConsoleSharedPipesModule { }
