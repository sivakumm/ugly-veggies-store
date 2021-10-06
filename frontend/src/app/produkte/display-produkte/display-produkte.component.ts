import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display-produkte',
  templateUrl: './display-produkte.component.html',
  styleUrls: ['./display-produkte.component.scss']
})
export class DisplayProdukteComponent {

  @Input() products: Product[] | null = [];
  private selectedId?: string;

  constructor(private router: Router) { }

  onSelect(product: Product) {
    this.router.navigate(['produkte', product.id])
  }

  isSelected(product: Product): boolean {
    return product.id === this.selectedId;
  }

  addProduct(product: Product) {
  }

  removeProduct(product: Product) {
  }
}
