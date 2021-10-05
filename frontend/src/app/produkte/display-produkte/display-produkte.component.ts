import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-display-produkte',
  templateUrl: './display-produkte.component.html',
  styleUrls: ['./display-produkte.component.scss']
})
export class DisplayProdukteComponent {

  @Input() products: Product[] | null = [];

  constructor() { }
}
