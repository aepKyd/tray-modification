import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tray-overview',
  templateUrl: './tray-overview.component.html',
  styleUrls: ['./tray-overview.component.css']
})
export class TrayOverviewComponent {
  @Input() tray: {
    id: string;
    type: number;
    rowCount: number;
    activityCode?: string;
    tableData?: Array<{
      productCode: string;
      quantity: number;
      reserveQuantity: number;
      expiryDate: string;
      lockCode: string;
      trayCode: string;
      acceptanceNumber: string;
      sscc: string;
      ean: string;
      client: string;
    }>
  } | null = null;

  eanCode: string = '';

  // Метод для обработки действия "Изменить"
  editRow(index: number): void {
    if (this.tray?.tableData) {
      console.log('Редактирование строки:', index, this.tray.tableData[index]);
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