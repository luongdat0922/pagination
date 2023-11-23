import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems!: number;
  @Input() currentPage!: number;
  @Input() maxSize!: number;
  @Input() rotate!: boolean;
  @Input() boundaryLinks!: boolean;
  @Output() pageChanged = new EventEmitter<number>();
}
