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

  selectedSection: number;

  // Метод для обработки действия "Изменить"
  editRow(index: number): void {
    if (this.tray?.lines) {
      console.log('Редактирование строки:', index, this.tray.lines[index]);
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
    // Добавьте логику для отмены действия
  }

  // Обработчик кнопки "Выход"
  exit(): void {
    console.log('Выход');
    // Добавьте логику для выхода
  }

  protected readonly length = length;

  isAnyLineHighlighted() {
    return this.tray.lines.find(line => line.isHighlighted);
  }
}