import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-topbar',
  imports: [MatToolbarModule, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent implements OnInit {
  @Input() fixed: boolean = false;
  @Input() limit: number = 400;
  private debounceTimeout: any;
  isScrolled = false;

  constructor() {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      this.checkScroll();
    }, 100);
  }

  checkScroll() {
    this.isScrolled =
      this.fixed || window.scrollY > this.limit || window.scrollY < 5;
  }
}
