import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-full-modal',
  templateUrl: './event-full-modal.component.html',
  styleUrls: ['./event-full-modal.component.css'],
})
export class EventFullModalComponent {
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  @Input() errorMessage?: string;

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
