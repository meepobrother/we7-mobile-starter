import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@core/settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    public setting: SettingsService
  ) { }

  ngOnInit() {
    
  }
}
