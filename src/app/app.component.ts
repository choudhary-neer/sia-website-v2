import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ToolbarComponent } from './components/toolbar/toolbar';
import { FooterComponent } from './components/footer/footer';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ToolbarComponent,
    FooterComponent
  ],
  template: `
    <div class="app-wrapper">
      <app-header></app-header>
      <app-toolbar></app-toolbar>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    .app-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .main-content {
      flex: 1;
      max-width: 1400px;
      margin: 0 auto 2rem auto;
      padding: 0 !important;
      width: 100%;
      margin-top: 0 !important;
      padding-top: 0 !important;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    // Set initial document title
    document.title = this.languageService.getContent().pageTitle;
  }
}