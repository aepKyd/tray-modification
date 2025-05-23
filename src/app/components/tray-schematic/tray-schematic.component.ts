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

// Метод для добавления класса выделения
  isSectionHighlighted(sectionNumber: number): boolean {
    return this.selectedSection === sectionNumber;
  }

  // Method to check if a section number exists in the tray's lines
  isSectionMissing(sectionNumber: number): boolean {
    return !this.tray?.lines?.some(line => line.lineNumber === sectionNumber);
  }

  generateSections(type: number): number[] {
    // Предположим, что типы 1-8 соответствуют количеству секций равному их значению
    // Исключение: если тип не поддерживается, возвращаем пустой массив
    return type > 0 ? Array.from({ length: type }, (_, index) => index + 1) : [];
  }
}