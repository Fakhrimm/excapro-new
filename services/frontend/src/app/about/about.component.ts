import { Component } from '@angular/core';
import { DataWidgetComponent } from '@app/widgets/data-widget/data-widget.component';
import { ListWidgetComponent } from "../widgets/list-widget/list-widget.component";

@Component({
  selector: 'app-about',
  imports: [DataWidgetComponent, ListWidgetComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
