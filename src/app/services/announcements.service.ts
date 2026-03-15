import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AnnouncementsFile, Announcement } from '../models/announcement';

@Injectable({ providedIn: 'root' })
export class AnnouncementsService {
  private readonly url = 'assets/content/announcements.json';

  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<AnnouncementsFile>(this.url).pipe(
      map(data => data.announcements)
    );
  }
}