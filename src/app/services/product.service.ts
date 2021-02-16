import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {UniqueGeneratorService} from './unique-generator.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private uniqueGeneratorService: UniqueGeneratorService
  ) { }

  public getProductBravo(): Observable<Product[]> {
    return new Observable<Product[]>(subscriber => {
      //TODO.
      const productList = [
        {
          id: this.uniqueGeneratorService.generateNewIdString(),
          name: 'Bánh Hamburger',
          cost: 123456,
          costOld: 456789,
          imageUrl: './assets/img/6.jpg'
        },
        {
          id: this.uniqueGeneratorService.generateNewIdString(),
          name: 'Bánh Hamburger',
          cost: 947856,
          costOld: 1256854,
          imageUrl: './assets/img/c6.png'
        },
      ];
      subscriber.next(productList);
    });
  }
}
