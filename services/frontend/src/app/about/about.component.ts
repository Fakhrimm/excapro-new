import { Component } from '@angular/core';
import { DataWidgetComponent } from '@app/widgets/data-widget/data-widget.component';

@Component({
  selector: 'app-about',
  imports: [DataWidgetComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
