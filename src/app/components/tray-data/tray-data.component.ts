import { Component, Input } from '@angular/core';
import {Tray} from "../../model/tray.model";

@Component({
  selector: 'app-tray-data',
  templateUrl: './tray-data.component.html',
  styleUrls: ['./tray-data.component.css']
})
export class TrayDataComponent {
  @Input() tray: Tray;
}