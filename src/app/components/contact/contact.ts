import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ContentModel } from '../../models/content';
import { RouterModule } from '@angular/router';
import { ContactValuesService } from '../../services/contact-values.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})  
export class ContactComponent implements OnInit {
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