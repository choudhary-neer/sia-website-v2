import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { ContentModel } from '../../models/content';
import { BoardMembersService } from '../../services/board-members.service';
import { BoardMember } from '../../models/board-member';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './board.html',
  styleUrls: ['./board.css']
})
export class BoardComponent implements OnInit {
  content!: ContentModel;
  boardMembers: BoardMember[] = [];

  constructor(
    private languageService: LanguageService,
    private boardMembersService: BoardMembersService
  ) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });

    this.boardMembersService.getBoardMembers().subscribe(members => {
      this.boardMembers = members;
    });
  }
}