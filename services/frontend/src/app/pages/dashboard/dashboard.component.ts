import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    EventsComponent,
    SettingsComponent,
    StatisticsComponent,
    UsersComponent,
    HomeComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  view: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.view = params.get('view')!;
    });
  }
}
