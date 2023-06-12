import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css'],
})
export class CreateEventModalComponent {
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
