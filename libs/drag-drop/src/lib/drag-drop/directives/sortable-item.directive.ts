import { Directive, forwardRef, ElementRef, Inject, ViewContainerRef, NgZone } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { DragDropService } from '../drag-drop.service';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[mlSortableItem], [npSortableItem]',
  providers: [{
    provide: DraggableDirective, useExisting: forwardRef(() => SortableItemDirective)
  }]
})
export class SortableItemDirective<T = any> extends DraggableDirective<T> {

  _revert = true;

  constructor(
    public element: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) protected _document: any,
    protected _viewContainerRef: ViewContainerRef,
    protected _ngZone: NgZone,
    dragDrop: DragDropService
  ) {
    super(element, _document, _viewContainerRef, _ngZone, dragDrop);
  }

}
