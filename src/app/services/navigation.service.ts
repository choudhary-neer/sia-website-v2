import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activeSection = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSection.asObservable();

  constructor() {}

  setActiveSection(section: string) {
    this.activeSection.next(section);
  }

  scrollToSection(sectionId: string) {
    this.activeSection.next(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}