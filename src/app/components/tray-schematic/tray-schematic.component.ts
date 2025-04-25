import { Component, Input } from '@angular/core';
import {Tray} from "../../model/tray.model";

@Component({
  selector: 'app-tray-schematic',
  templateUrl: './tray-schematic.component.html',
  styleUrls: ['./tray-schematic.component.css']
})
export class TraySchematicComponent {
  @Input() tray: Tray | undefined;
  @Input() selectedSection: number | null = null;
}