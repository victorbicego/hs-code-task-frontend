import { Component, Input } from '@angular/core';
import { Event } from '../interfaces/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  @Input() event?: Event;

  showDescription: boolean = false;
  showPrice: boolean = false;
  showCapacity: boolean = false;
  showDeleteEventModal: boolean = false;

  handleCloseDeleteEventModal(): void {
    this.showDeleteEventModal = false;
  }
}
