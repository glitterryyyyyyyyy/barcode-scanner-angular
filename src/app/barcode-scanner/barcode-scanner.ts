import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [ZXingScannerModule, NgIf],
  templateUrl: './barcode-scanner.html',
  styleUrls: ['./barcode-scanner.css'],
})
export class BarcodeScannerComponent {
  scannedResult: string = '';
  selectedDevice: any = null;
 allowedFormats = Object.values(BarcodeFormat) as BarcodeFormat[];
  onCodeResult(result: string) {
    this.scannedResult = result;
  }
}
