import { Component } from '@angular/core';
import {Tray} from "./model/tray.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tray App';

  tray: Tray = {
    id: 'TRAY001',
    type: 8,
    activityCode: 'GOA225',
    lines: [
      { lineNumber: 1, productCode: '123456', quantity: 10, reserveQuantity: 2, expiryDate: '2025-12-31', lockCode: 'LOCK1', trayCode: 'TRAY001', acceptanceNumber: 'ACPT1234', sscc: 'SSCC1234567890', ean: 'EAN1234567890', client: 'Клиент A' },
      { lineNumber: 2, productCode: '789012', quantity: 5, reserveQuantity: 1, expiryDate: '2025-11-30', lockCode: 'LOCK2', trayCode: 'TRAY002', acceptanceNumber: 'ACPT5678', sscc: 'SSCC0987654321', ean: 'EAN0987654321', client: 'Клиент B' },
      { lineNumber: 3, productCode: '654321', quantity: 20, reserveQuantity: 5, expiryDate: '2025-10-15', lockCode: 'LOCK3', trayCode: 'TRAY003', acceptanceNumber: 'ACPT91011', sscc: 'SSCC1122334455', ean: 'EAN1122334455', client: 'Клиент C' },
      { lineNumber: 5, productCode: '456789', quantity: 15, reserveQuantity: 4, expiryDate: '2025-09-25', lockCode: 'LOCK4', trayCode: 'TRAY004', acceptanceNumber: 'ACPT121314', sscc: 'SSCC6677889900', ean: 'EAN6677889900', client: 'Клиент D' },
      { lineNumber: 7, productCode: '321654', quantity: 8, reserveQuantity: 2, expiryDate: '2025-08-20', lockCode: 'LOCK5', trayCode: 'TRAY005', acceptanceNumber: 'ACPT151617', sscc: 'SSCC2233445566', ean: 'EAN2233445566', client: 'Клиент E' },
    ]
  };
}