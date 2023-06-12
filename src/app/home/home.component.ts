import { Component, OnInit } from '@angular/core';
import { Event } from '../interfaces/event';
import { EventService } from '../services/event-service/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  private getAllEvents() {
    this.eventService.getAllEvents().subscribe(
      (events) => {
        this.events = events;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  subscribeToEventDeleted(eventId: number): void {
    this.eventService.deleteEvent(eventId).subscribe(
      () => {
        this.getAllEvents();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
