import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ContentModel } from '../../models/content';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  content!: ContentModel;
  currentLang: 'en' | 'sv' = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.content = this.languageService.getContent();
    });
  }

  switchLanguage(lang: 'en' | 'sv') {
    this.languageService.setLanguage(lang);
  }
}