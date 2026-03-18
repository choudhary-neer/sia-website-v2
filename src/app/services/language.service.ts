import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentModel } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<'en' | 'sv'>('en');
  currentLang$ = this.currentLang.asObservable();

  private content: Record<'en' | 'sv', ContentModel> = {
    en: {
      pageTitle: 'SIA – Sandviken Indian Association',
      header: {
      },
      toolbar: {
        home: 'Home',
        about: 'About Us',
        membership: 'Membership',
        photoGallery: 'Photo Gallery',
        contact: 'Contact',
        board: 'Board of Directors',
        announcements: 'Announcements',
        events: 'Events'
      },
      footer: {
        about: 'About SIA',
        quickLinks: 'Quick Links',
        contact: 'Contact Us',
        followUs: 'Follow Us',
        home: 'Home',
        membership: 'Membership',
        events: 'Events',
        photoGallery: 'Photo Gallery',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      },
      pages: {
        home: {
          title: 'Welcome to SIA',
          subtitle: 'Sandviken Indian Association – where Indian traditions meet Sweden',
          ctaLearnMore: 'Learn More',
          eventsTitle: 'Upcoming Events',
          announcementsTitle: 'Announcements',
          readMore: 'Read more'
        },
        about: {
          title: 'About Us',
          subtitle: 'Learn more about our community and mission'
        },
        membership: {
          title: 'Membership',
          subtitle: 'Join our vibrant community and be part of something meaningful'
        },
        events: {
          title: 'Events',
          subtitle: 'Discover upcoming cultural events and celebrations'
        },
        announcements: {
          title: 'Announcements',
          subtitle: 'Stay updated with the latest news and updates'
        },
        photoGallery: {
          title: 'Photo Gallery',
          subtitle: 'Explore moments from our cultural events and celebrations'
        },
        contact: {
          title: 'Contact Us',
          subtitle: 'Get in touch with our community'
        },
        board: {
          title: 'Board of Directors',
          subtitle: 'Meet our dedicated board members'
        }
      }
    },
    sv: {
      pageTitle: 'SIA – Sandviken Indian Association',
      header: {
      },
      toolbar: {
        home: 'Hem',
        about: 'Om oss',
        membership: 'Medlemskap',
        photoGallery: 'Fotogalleri',
        contact: 'Kontakt',
        board: 'Styrelse',
        announcements: 'Meddelanden',
        events: 'Evenemang'
      },
      footer: {
        about: 'Om SIA',
        quickLinks: 'Snabblänkar',
        contact: 'Kontakta oss',
        followUs: 'Följ oss',
        home: 'Hem',
        membership: 'Medlemskap',
        events: 'Evenemang',
        photoGallery: 'Fotogalleri',
        email: 'E-post',
        phone: 'Telefon',
        address: 'Adress'
      },
      pages: {
        home: {
          title: 'Välkommen till SIA',
          subtitle: 'Sandviken Indian Association – där indiska traditioner möter Sverige',
          ctaLearnMore: 'Läs mer',
          eventsTitle: 'Kommande evenemang',
          announcementsTitle: 'Meddelanden',
          readMore: 'Läs mer'
        },
        about: {
          title: 'Om oss',
          subtitle: 'Lär dig mer om vår gemenskap och vårt uppdrag'
        },
        membership: {
          title: 'Medlemskap',
          subtitle: 'Gå med i vår livliga gemenskap och var en del av något meningsfullt'
        },
        events: {
          title: 'Evenemang',
          subtitle: 'Upptäck kommande kulturella evenemang och firanden'
        },
        announcements: {
          title: 'Meddelanden',
          subtitle: 'Håll dig uppdaterad med de senaste nyheterna och uppdateringarna'
        },
        photoGallery: {
          title: 'Fotogalleri',
          subtitle: 'Utforska ögonblick från våra kulturella evenemang och firanden'
        },
        contact: {
          title: 'Kontakta oss',
          subtitle: 'Kom i kontakt med vår gemenskap'
        },
        board: {
          title: 'SIA Styrelse',
          subtitle: 'Möt våra engagerade styrelsemedlemmar'
        }
      }
    }
  };

  constructor() {}

  get currentLanguage() {
    return this.currentLang.value;
  }

  setLanguage(lang: 'en' | 'sv') {
    this.currentLang.next(lang);
    // Update document title
    document.title = this.content[lang].pageTitle;
  }

  getContent() {
    return this.content[this.currentLang.value];
  }

  getContentObservable() {
    return this.currentLang$.subscribe(lang => {
      return this.content[lang];
    });
  }
}