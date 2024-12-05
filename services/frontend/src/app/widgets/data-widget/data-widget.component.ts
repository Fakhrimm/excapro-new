import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-widget',
  imports: [],
  templateUrl: './data-widget.component.html',
  styleUrl: './data-widget.component.scss',
})
export class DataWidgetComponent {
  @Input() stats: string = '99%';
  @Input() description: string = 'Random metrics here';
}
