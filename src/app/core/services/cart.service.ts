import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { Product } from "src/app/shared/models/product.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart$: BehaviorSubject<Product[]>;
  private cart: Product[];

  constructor() {
    let savedCart = this.getCartItems();
    this.cart$ = new BehaviorSubject(savedCart);
    this.cart = savedCart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
    localStorage.setItem("product", JSON.stringify(this.cart));
    this.cart$.next(this.cart);
  }

  removeFromCart(product: Product) {
    this.cart = this.cart.filter((res) => {
      if (res.product_name !== product.product_name) {
        return res;
      }
    });
    localStorage.setItem("product", JSON.stringify(this.cart));
    this.cart$.next(this.cart);
  }

  getCartItems() {
    let products: Product[];
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
