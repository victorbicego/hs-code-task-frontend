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

  showDescription: boolean = false;
  showPrice: boolean = false;
  showCapacity: boolean = false;
  showDeleteEventModal: boolean = false;

  handleCloseDeleteEventModal(): void {
    this.showDeleteEventModal = false;
  }

  handleDeleteEvent(): void {
    this.eventDeleted.emit(this.event?.id);
  }
}
