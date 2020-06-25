import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "src/app/shared/models/cart.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart$: BehaviorSubject<CartItem[]>;
  private cart: CartItem[];

  constructor() {
    let savedCart = this.getCartItems();
    this.cart$ = new BehaviorSubject(savedCart);
    this.cart = savedCart;
  }

  addToCart(product: CartItem) {
    let arrIndex: number;
    let checkItem: CartItem | undefined = this.cart.find((item, index) => {
      if (item.product_item.id == product.product_item.id && item.sub_id == product.sub_id) {
        arrIndex = index;
        return item;
      }
    });
    if (!checkItem) {
      this.cart.push(product);
    } else {
      checkItem.quantity = product.quantity;
      this.cart[arrIndex] = checkItem;
    }
    localStorage.setItem("product", JSON.stringify(this.cart));
    this.cart$.next(this.cart);
  }

  removeFromCart(product: CartItem) {
    let productId = this.cart.findIndex((item) => {
      if (item.id == product.id && item.sub_id == product.sub_id) {
        return item;
      }
    });
    this.cart.splice(productId, 1);
    localStorage.setItem("product", JSON.stringify(this.cart));
    this.cart$.next(this.cart);
  }
  clearCart() {
    this.cart = [];
    localStorage.clear();
    this.cart$.next(this.cart);
  }

  getCartItems() {
    let products: CartItem[];
    if (localStorage.getItem("product")) {
      products = JSON.parse(localStorage.getItem("product"));
    } else {
      products = [];
    }
    return products;
  }

  getCartItemsObs() {
    return this.cart$;
  }
}
