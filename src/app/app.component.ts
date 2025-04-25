import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tray App';

  tray = { id: '1234', type: 6, rowCount: 1, activityCode: "goa225" };
  selectedSection = 2;
}