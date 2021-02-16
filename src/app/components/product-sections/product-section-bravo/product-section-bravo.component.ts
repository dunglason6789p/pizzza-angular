import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/Product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-section-bravo',
  templateUrl: './product-section-bravo.component.html',
  styleUrls: ['./product-section-bravo.component.scss']
})
export class ProductSectionBravoComponent implements OnInit {

  @Input()
  public productList: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProductBravo().subscribe(productList => {
      this.productList = productList;
    });
  }

}
