import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { MembershipComponent } from './components/membership/membership';
import { EventsComponent } from './components/events/events';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery';
import { AnnouncementsComponent } from './components/announcements/announcements';
import { BoardComponent } from './components/board/board';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'events', component: EventsComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'board', component: BoardComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }
];
