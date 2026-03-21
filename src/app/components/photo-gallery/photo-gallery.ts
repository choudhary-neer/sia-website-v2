import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ContentModel } from '../../models/content';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './photo-gallery.html',
  styleUrls: ['./photo-gallery.css']
})
export class PhotoGalleryComponent implements OnInit {
  content!: ContentModel;
  currentIndex = 0;
  readonly images = [
    {
      src: 'assets/photo-gallery/sandviken-1.jpg',
      alt: 'Sandvieken City 1'
    },
    {
      src: 'assets/photo-gallery/sandviken-2.jpg',
      alt: 'Sandvieken City 2'
    },
    {
      src: 'assets/photo-gallery/sandviken-3.jpg',
      alt: 'Sandvieken City 3'
    },
    {
      src: 'assets/photo-gallery/sandviken-4.jpg',
      alt: 'Sandvieken City 4'
    },
    {
      src: 'assets/photo-gallery/sandviken-5.jpg',
      alt: 'Sandvieken City 5'
    },
    {
      src: 'assets/photo-gallery/sandviken-6.jpg',
      alt: 'Sandvieken City 6'
    },
    {
      src: 'assets/photo-gallery/sandviken-7.jpg',
      alt: 'Sandvieken City 7'  
    },
    {
      src: 'assets/photo-gallery/sandviken-8.jpg',
      alt: 'Sandvieken City 8'
    }
  ];
  private autoplayHandle: ReturnType<typeof setInterval> | null = null;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLang$.subscribe(() => {
      this.content = this.languageService.getContent();
    });

    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  pauseAutoplay(): void {
    this.stopAutoplay();
  }

  resumeAutoplay(): void {
    this.startAutoplay();
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.autoplayHandle = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private stopAutoplay(): void {
    if (this.autoplayHandle) {
      clearInterval(this.autoplayHandle);
      this.autoplayHandle = null;
    }
  }
}
