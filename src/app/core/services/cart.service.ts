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
    this.cart.push(product);
    localStorage.setItem("product", JSON.stringify(this.cart));
    this.cart$.next(this.cart);
  }

  removeFromCart(product: CartItem) {
    this.cart = this.cart.filter((res) => {
      if (res.product_name !== product.product_name) {
        return res;
      }
    });
    localStorage.setItem("product", JSON.stringify(this.cart));
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
