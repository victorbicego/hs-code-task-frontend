import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-event-modal',
  templateUrl: './delete-event-modal.component.html',
  styleUrls: ['./delete-event-modal.component.css'],
})
export class DeleteEventModalComponent {
  @Output() confirmDelete: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  deleteEvent(): void {
    this.confirmDelete.emit();
  }
}
