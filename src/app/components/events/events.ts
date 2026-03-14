import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ContentModel } from '../../models/content';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './events.html',
  styleUrls: ['./events.css']
})
export class EventsComponent implements OnInit {
  content: ContentModel = {} as ContentModel;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.content = this.languageService.getContent();
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });
  }

  trackByEvent(index: number, event: any): any {
    return event.id || index;
  }
}