import { Component } from '@angular/core';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarcodeScannerComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  title = 'barcode-scanner-app';
}
