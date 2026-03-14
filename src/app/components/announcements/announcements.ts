import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { ContentModel } from '../../models/content';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './announcements.html',
  styleUrls: ['./announcements.css']
})
export class AnnouncementsComponent implements OnInit {
  content!: ContentModel;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });
  }
}