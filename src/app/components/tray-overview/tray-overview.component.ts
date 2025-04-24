import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tray-overview',
  templateUrl: './tray-overview.component.html',
  styleUrls: ['./tray-overview.component.css']
})
export class TrayOverviewComponent {
  @Input() tray: { id: string; type: number; rowCount: number } | null = null;
  @Input() selectedSection: number | null = null;
}