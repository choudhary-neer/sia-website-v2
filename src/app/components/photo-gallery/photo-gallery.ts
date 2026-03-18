import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ContentModel } from '../../models/content';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './photo-gallery.html',
  styleUrls: ['./photo-gallery.css']
})
export class PhotoGalleryComponent implements OnInit {
  content!: ContentModel;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });
  }
}
