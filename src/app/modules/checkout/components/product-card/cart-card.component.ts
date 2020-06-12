import { Component, OnInit, Output, ElementRef, EventEmitter, Input } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";

@Component({
  selector: "app-cart-card",
  templateUrl: "./cart-card.component.html",
  styleUrls: ["./cart-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input("productData") data: CartItem;
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
