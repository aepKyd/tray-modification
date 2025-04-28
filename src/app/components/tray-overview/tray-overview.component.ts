import { Component, Input } from '@angular/core';
import {Tray} from "../../model/tray.model";

@Component({
  selector: 'app-tray-overview',
  templateUrl: './tray-overview.component.html',
  styleUrls: ['./tray-overview.component.css']
})
export class TrayOverviewComponent {
  @Input() tray: Tray;

  eanCode: string = '';

  selectedSection: number | null = null;

  editedRow: number | null = null;

  // Метод для обработки действия "Изменить"
  editRow(index: number): void {
    if (this.tray?.lines) {
      if (this.editedRow === null) {
        console.log('Редактирование строки:', index, this.tray.lines[index]);

        this.editedRow = index;
        const matchedLine = this.tray.lines[index];
        matchedLine.isHighlighted = true; // Выделение строки
        this.selectedSection = matchedLine.lineNumber; // Выделение ячейки в компоненте Tray Schematic
      } else if (index === this.editedRow) {
        console.log('Отправка', index, this.tray.lines[index]);

        // submit update
        this.selectedSection = null;
        this.tray.lines.forEach(line => (line.isHighlighted = false));
        this.editedRow = null;
      }

      // Добавьте логику для редактирования строки
    }
  }

  submitEAN(): void {
    console.log('EAN submitted:', this.eanCode);


    if (this.tray?.lines) {
      // Сброс выделения для всех строк
      this.tray.lines.forEach(line => (line.isHighlighted = false));

      if (!this.eanCode.trim()) {
        // Если поле EAN пустое, сбрасываем выделение и делаем кнопки видимыми
        console.log('Поле EAN пустое. Сбрасываем выделение.');
        this.selectedSection = null;
        return;
      }

      // Поиск строки, где EAN содержит введённое значение
      const matchedLine = this.tray.lines.find(line =>
          line.ean.includes(this.eanCode)
      );

      if (matchedLine) {
        matchedLine.isHighlighted = true; // Выделение строки
        this.selectedSection = matchedLine.lineNumber; // Выделение ячейки в компоненте Tray Schematic
      }
    }
  }

  // Обработчик кнопки "Новый лоток"
  createNewTray(): void {
    console.log('Создание нового лотка');
    // Добавьте логику для создания нового лотка
  }

  // Обработчик кнопки "Отмена"
  cancel(): void {
    console.log('Отмена');

    this.eanCode = '';
    this.selectedSection = null;
    if (this.tray?.lines) {
      // Сброс выделения для всех строк
      this.tray.lines.forEach(line => (line.isHighlighted = false));
    }
  }

  // Обработчик кнопки "Выход"
  exit(): void {
    console.log('Выход');
    // Добавьте логику для выхода
  }

  isAnyLineHighlighted(): boolean {
    return !!this.tray?.lines?.some(line => line.isHighlighted);
  }

  isEditingRow(index: number): boolean {
    return this.editedRow === index;
  }

  isAnyRowEditing(): boolean {
    return this.editedRow !== null;
  }

  isShowEdit(i: number) {
    return (this.tray?.lines[i]?.isHighlighted || !this.isAnyLineHighlighted()) && (this.editedRow === null || this.editedRow === i)
  }
}