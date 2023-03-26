import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromNowPipe } from './from-now.pipe';
import { SequenceLabelPipe } from './sequence-label.pipe';

@NgModule({
  declarations: [FromNowPipe, SequenceLabelPipe],
  imports: [
    CommonModule
  ],
  exports: [FromNowPipe, SequenceLabelPipe]
})
export class ConsoleSharedPipesModule { }
