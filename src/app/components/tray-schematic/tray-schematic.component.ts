import { Component, Input } from '@angular/core';
import { Tray } from "../../model/tray.model";

@Component({
  selector: 'app-tray-schematic',
  templateUrl: './tray-schematic.component.html',
  styleUrls: ['./tray-schematic.component.css']
})
export class TraySchematicComponent {
  @Input() tray: Tray | undefined;
  @Input() selectedSection: number | null = null;

  // Method to check if a section number exists in the tray's lines
  isSectionMissing(sectionNumber: number): boolean {
    return !this.tray?.lines?.some(line => line.lineNumber === sectionNumber);
  }
}