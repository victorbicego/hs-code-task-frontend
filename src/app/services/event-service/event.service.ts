import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:8080/events';

  constructor(private httpClient: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.apiUrl);
  }

  deleteEvent(eventId: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${eventId}`);
  }

  createEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(this.apiUrl, event);
  }

  subscribeToEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.apiUrl}/subscribe`, event);
  }
}
