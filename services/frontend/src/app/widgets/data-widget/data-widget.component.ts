import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-widget',
  imports: [CommonModule],
  templateUrl: './data-widget.component.html',
  styleUrl: './data-widget.component.scss',
})
export class DataWidgetComponent {
  @Input() value: number = 99;
  @Input() suffix: string = '%';
  @Input() description: string = 'Random metrics here';
  shownNumber: number = 0;
  private observer: IntersectionObserver = {} as IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animateCount();
        } else {
          this.shownNumber = 0;
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  animateCount(): void {
    const steps = 30;
    const stepTime = 30;
    const increment = this.value / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      this.shownNumber = Math.min(
        Math.round(currentStep * increment),
        this.value
      );

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);
  }
}
