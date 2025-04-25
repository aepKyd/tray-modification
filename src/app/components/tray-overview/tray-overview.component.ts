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

  // Метод для обработки действия "Изменить"
  editRow(index: number): void {
    if (this.tray?.lines) {
      console.log('Редактирование строки:', index, this.tray.lines[index]);
      // Добавьте логику для редактирования строки
    }
  }

  submitEAN(): void {
    console.log('EAN submitted:', this.eanCode);
    // Добавьте необходимую логику для обработки EAN
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

}