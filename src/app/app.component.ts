import { Component } from '@angular/core';

interface Product {
  id: string;
  name: string;
  cost: number;
  costOld: number;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'try-angular';
  newProductListCarousel: Product[] = [
    {
      id: this.generateNewId() + '',
      name: 'Bánh Hamburger',
      cost: 123456,
      costOld: 456789,
      imageUrl: './pizzza/6.jpg'
    }
  ];

  nextIdForGenerator = 0;
  generateNewId(): number {
    return this.nextIdForGenerator++;
  }
}
