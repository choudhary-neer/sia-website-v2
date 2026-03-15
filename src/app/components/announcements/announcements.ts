import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { ContentModel } from '../../models/content';
import { AnnouncementsService } from '../../services/announcements.service';
import { Announcement } from '../../models/announcement';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './announcements.html',
  styleUrls: ['./announcements.css']
})
export class AnnouncementsComponent implements OnInit {
  content!: ContentModel;
  announcements: Announcement[] = [];

  constructor(
    private languageService: LanguageService,
    private announcementsService: AnnouncementsService
  ) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });

    this.announcementsService.getAnnouncements().subscribe(data => {
      this.announcements = data;
    });
  }
}