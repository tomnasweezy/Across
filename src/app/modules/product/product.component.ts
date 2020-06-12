import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/shared/models/product.model";
import { CartService } from "src/app/core/services/cart.service";
import { ProductService } from "src/app/core/services/product.service";
import { Location } from "@angular/common";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  product: Product;
  selectedColor: string = "black";
  selectedQuantity: number = 1;
  selectedSize: string;

  constructor(
    private aRouter: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private location: Location
  ) {
    this.aRouter.params.subscribe((parms) => {
      let pi = parms["productId"];
      let resProduct = this.productService.getOneProduct(pi);
      if (resProduct.length > 0) {
        this.product = resProduct[0];
        this.selectedColor = this.product.color[0];
        this.selectedQuantity = 1;
        this.selectedSize = this.product.size[0];
      } else {
        this.location.back();
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    let product: CartItem = {
      id: this.product.id,
      price: this.product.price,
      product_name: this.product.product_name,
      color: this.selectedColor,
      quantity: this.selectedQuantity,
      size: this.selectedSize,
    };

    this.cartService.addToCart(product);
  }
}
