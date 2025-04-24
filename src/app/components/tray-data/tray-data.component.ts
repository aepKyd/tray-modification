import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tray-data',
  templateUrl: './tray-data.component.html',
  styleUrls: ['./tray-data.component.css']
})
export class TrayDataComponent {
  @Input() tray: { id: string; type: number; rowCount: number } | null = null;
  @Input() selectedSection: number | null = null;
}