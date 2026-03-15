import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ContentModel } from '../../models/content';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { EventItem } from '../../models/event';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './events.html',
  styleUrls: ['./events.css']
})
export class EventsComponent implements OnInit {
  content: ContentModel = {} as ContentModel;
  events: EventItem[] = [];

  constructor(
    private languageService: LanguageService,
    private eventsService: EventsService
  ) {}

  ngOnInit() {
    this.content = this.languageService.getContent();
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });

    this.eventsService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  trackByEvent(index: number, event: EventItem): any {
    return event.title || index;
  }
}