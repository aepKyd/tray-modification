export class Tray {
  id: string;
  type: number;
  activityCode?: string;
  lines?: Line[];

  constructor({
    id,
    type,
    activityCode,
    lines,
  }: {
    id: string;
    type: number;
    activityCode?: string;
    lines?: Line[];
  }) {
    this.id = id;
    this.type = type;
    this.activityCode = activityCode;
    this.lines = lines;
  }
}

export class Line {
  lineNumber: number;
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
  isHighlighted?: boolean; // Новое поле для выделения строки
  deficit?: number;
  defect?: number;
  transfer?: number;

  constructor({
                lineNumber,
                productCode,
                quantity,
                reserveQuantity,
                expiryDate,
                lockCode,
                trayCode,
                acceptanceNumber,
                sscc,
                ean,
                client,
              }: {
    lineNumber: number;
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
  }) {
    this.lineNumber = lineNumber;
    this.productCode = productCode;
    this.quantity = quantity;
    this.reserveQuantity = reserveQuantity;
    this.expiryDate = expiryDate;
    this.lockCode = lockCode;
    this.trayCode = trayCode;
    this.acceptanceNumber = acceptanceNumber;
    this.sscc = sscc;
    this.ean = ean;
    this.client = client;
    this.isHighlighted = false;
  }
}