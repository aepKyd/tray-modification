import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tray-schematic',
  templateUrl: './tray-schematic.component.html',
  styleUrls: ['./tray-schematic.component.css']
})
export class TraySchematicComponent {
  @Input() trayType: number | undefined;
  @Input() selectedSection: number | null = null;
}