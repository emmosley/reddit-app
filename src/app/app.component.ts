import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  constructor(private apiService: ApiService) {}
  title = 'reddit-app';
  data = this.apiService.fetchAwwSubreddit().subscribe((data) => this.data = { ...data });
}
