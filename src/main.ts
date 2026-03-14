import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Migrate legacy hash-based URLs (e.g. /#/about) to clean path URLs (/about).
// This handles the transition period after moving from hash to path routing.
const hash = window.location.hash;
if (hash.startsWith('#/')) {
  window.history.replaceState(null, '', hash.slice(1) + window.location.search);
}

// Support GitHub Pages SPA fallback from /404.html redirect.
const params = new URLSearchParams(window.location.search);
const fallbackPath = params.get('p');
if (fallbackPath) {
  window.history.replaceState(null, '', decodeURIComponent(fallbackPath));
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
