import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-awe-section-two',
  templateUrl: './awe-section-two.component.html',
  styleUrls: ['./awe-section-two.component.scss']
})
export class AweSectionTwoComponent implements OnInit {
  @Input()
  public productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
