import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ContentModel } from '../../models/content';

interface CarouselSlide {
  src: string;
  alt: string;
  loaded: boolean;
  error: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  content!: ContentModel;
  homeSlide = 0;
  carouselReady = false;

  readonly slides: CarouselSlide[] = [
    { src: 'assets/photo-gallery/home-1.jpg', alt: 'Community photo 1', loaded: false, error: false },
    { src: 'assets/photo-gallery/home-2.jpg', alt: 'Community photo 2', loaded: false, error: false },
    { src: 'assets/photo-gallery/home-3.jpg', alt: 'Community photo 3', loaded: false, error: false },
    { src: 'assets/photo-gallery/home-4.jpg', alt: 'Community photo 4', loaded: false, error: false },
  ];

  private autoplayHandle: ReturnType<typeof setInterval> | null = null;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });
    // Let the page render first, then load carousel images
    setTimeout(() => {
      this.carouselReady = true;
      this.startAutoplay();
    }, 0);
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  prev(): void {
    this.homeSlide = (this.homeSlide - 1 + this.slides.length) % this.slides.length;
  }

  next(): void {
    this.homeSlide = (this.homeSlide + 1) % this.slides.length;
  }

  goTo(index: number): void {
    this.homeSlide = index;
  }

  onImageLoad(slide: CarouselSlide): void {
    slide.loaded = true;
  }

  onImageError(slide: CarouselSlide): void {
    slide.error = true;
    slide.loaded = true;
  }

  pauseAutoplay(): void {
    this.stopAutoplay();
  }

  resumeAutoplay(): void {
    this.startAutoplay();
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.autoplayHandle = setInterval(() => this.next(), 5000);
  }

  private stopAutoplay(): void {
    if (this.autoplayHandle) {
      clearInterval(this.autoplayHandle);
      this.autoplayHandle = null;
    }
  }
}