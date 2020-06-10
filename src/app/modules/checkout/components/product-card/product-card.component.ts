import { Component, OnInit, Output, ElementRef, EventEmitter, Input } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input("productData") data: Product;
  @Output("delete") deleteItem = new EventEmitter();
  @Output("quantity") updateQuantity = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  removeItem() {
    this.deleteItem.emit(this.data);
  }
  quantityamount() {
    this.updateQuantity.emit(this.data);
    console.log(this.data);
  }
}
