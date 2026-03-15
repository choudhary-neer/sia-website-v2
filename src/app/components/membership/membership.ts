import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ContentModel } from '../../models/content';
import { ContactValuesService } from '../../services/contact-values.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './membership.html',
  styleUrls: ['./membership.css']
})
export class MembershipComponent implements OnInit {
  content!: ContentModel;
  contact!: Contact;

  constructor(
    private languageService: LanguageService,
    private contactValuesService: ContactValuesService
  ) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });
    this.contactValuesService.getContactValues().subscribe(data => {
      this.contact = data;
    });
  }
}