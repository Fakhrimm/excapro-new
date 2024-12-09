import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DataWidgetComponent } from '@app/widgets/data-widget/data-widget.component';
import { ListWidgetComponent } from '@app/widgets/list-widget/list-widget.component';

@Component({
  selector: 'app-about',
  imports: [DataWidgetComponent, ListWidgetComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  isInView1 = false;
  isInView2 = false;

  @ViewChild('animatedElement1') animatedElement1!: ElementRef;
  @ViewChild('animatedElement2') animatedElement2!: ElementRef;

  ngAfterViewInit() {
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isInView1 = true;
          } else {
            this.isInView1 = false;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer1.observe(this.animatedElement1.nativeElement);

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isInView2 = true;
          } else {
            this.isInView2 = false;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer2.observe(this.animatedElement2.nativeElement);
  }
}
