import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tray App';

  tray = {
    id: 'TRAY001',
    type: 8,
    rowCount: 6,
    activityCode: 'GOA225',
    tableData: [
      { productCode: '123456', quantity: 10, reserveQuantity: 2, expiryDate: '2025-12-31', lockCode: 'LOCK1', trayCode: 'TRAY001', acceptanceNumber: 'ACPT1234', sscc: 'SSCC1234567890', ean: 'EAN1234567890', client: 'Клиент A' },
      { productCode: '789012', quantity: 5, reserveQuantity: 1, expiryDate: '2025-11-30', lockCode: 'LOCK2', trayCode: 'TRAY002', acceptanceNumber: 'ACPT5678', sscc: 'SSCC0987654321', ean: 'EAN0987654321', client: 'Клиент B' },
      { productCode: '654321', quantity: 20, reserveQuantity: 5, expiryDate: '2025-10-15', lockCode: 'LOCK3', trayCode: 'TRAY003', acceptanceNumber: 'ACPT91011', sscc: 'SSCC1122334455', ean: 'EAN1122334455', client: 'Клиент C' },
      { productCode: '456789', quantity: 15, reserveQuantity: 4, expiryDate: '2025-09-25', lockCode: 'LOCK4', trayCode: 'TRAY004', acceptanceNumber: 'ACPT121314', sscc: 'SSCC6677889900', ean: 'EAN6677889900', client: 'Клиент D' },
      { productCode: '321654', quantity: 8, reserveQuantity: 2, expiryDate: '2025-08-20', lockCode: 'LOCK5', trayCode: 'TRAY005', acceptanceNumber: 'ACPT151617', sscc: 'SSCC2233445566', ean: 'EAN2233445566', client: 'Клиент E' },
      // { productCode: '987654', quantity: 12, reserveQuantity: 3, expiryDate: '2025-07-10', lockCode: 'LOCK6', trayCode: 'TRAY006', acceptanceNumber: 'ACPT181920', sscc: 'SSCC9988776655', ean: 'EAN9988776655', client: 'Клиент F' },
    ]
  };
  selectedSection = 2;
}