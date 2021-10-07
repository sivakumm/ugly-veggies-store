import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {addProductAction} from "../../state/products/products.action";

@Component({
  selector: 'app-display-produkte',
  templateUrl: './display-produkte.component.html',
  styleUrls: ['./display-produkte.component.scss']
})
export class DisplayProdukteComponent {

  @Input() products: Product[] = [];
  private selectedId?: string;

  constructor(private router: Router, private store: Store<AppState>) { }

  onSelect(product: Product) {
    this.router.navigate(['produkte', product.id])
  }

  isSelected(product: Product): boolean {
    return product.id === this.selectedId;
  }

  addProduct(product: Product) {
    this.store.dispatch(addProductAction({product}))
  }

  removeProduct(product: Product) {
  }
}
