import { Component } from '@angular/core';
import {Product} from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'try-angular';
  productListTwo: Product[] = [
    {
      id: this.generateNewId() + '',
      name: 'Bánh Hamburger',
      cost: 123456,
      costOld: 456789,
      imageUrl: './assets/img/6.jpg'
    }
  ];
  private nextIdForGenerator = 0;
  private generateNewId(): number {
    return this.nextIdForGenerator++;
  }
}
