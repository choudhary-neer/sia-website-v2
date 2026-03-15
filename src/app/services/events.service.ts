import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { EventsFile, EventItem } from '../models/event';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly url = 'assets/content/events.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventsFile>(this.url).pipe(
      map(data => data.events)
    );
  }
}