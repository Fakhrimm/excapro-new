import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-widget',
  imports: [],
  templateUrl: './list-widget.component.html',
  styleUrl: './list-widget.component.scss',
})
export class ListWidgetComponent {
  @Input() text: string = 'Lorem ipsum dolor sit amet';
}
