import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { ContentModel } from '../../models/content';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './board.html',
  styleUrls: ['./board.css']
})
export class BoardComponent implements OnInit {
  content!: ContentModel;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });
  }
}