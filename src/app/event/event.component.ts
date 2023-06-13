import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../interfaces/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  @Input() event?: Event;
  @Output() eventDeleted: EventEmitter<number> = new EventEmitter<number>();
  @Output() eventEdited: EventEmitter<void> = new EventEmitter<void>();

  showDescription: boolean = false;
  showPrice: boolean = false;
  showCapacity: boolean = false;
  showDeleteEventModal: boolean = false;
  showCreateEventModal: boolean = false;
  showNoSeatAvailableModal: boolean = false;

  handleCloseDeleteEventModal(): void {
    this.showDeleteEventModal = false;
  }

  handleDeleteEvent(): void {
    this.eventDeleted.emit(this.event?.id);
  }

  handleCloseCreateEventModal(): void {
    this.showCreateEventModal = false;
  }

  handleCreateEventModal(): void {
    this.handleCloseCreateEventModal();
    this.eventEdited.emit();
  }

  subscribeAttendantToEvent(): void {}
}
