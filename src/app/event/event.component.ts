import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../interfaces/event';
import { EventService } from '../services/event-service/event.service';

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

  errorMessage?: string;

  constructor(private eventService: EventService) {}

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

  subscribeAttendantToEvent(): void {
    this.eventService.subscribeToEvent(this.event!).subscribe(
      (response) => {
        this.eventEdited.emit();
      },
      (error) => {
        this.showNoSeatAvailableModal = true;
        this.errorMessage = error.error.messages[0];
        console.error(error);
      }
    );
  }

  handleCloseEventFullModal(): void {
    this.showNoSeatAvailableModal = false;
  }
}
