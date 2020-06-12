import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";
import { ActivatedRoute } from "@angular/router";
import { ProductData } from "src/app/data/productData";
import { Product } from "src/app/shared/models/product.model";
import { CartService } from "src/app/core/services/cart.service";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  productD: Product;
  selectedColor: string = "black";
  selectedQuantity: number = 1;
  selectedSize: string;

  constructor(private aRouter: ActivatedRoute, private cartService: CartService) {
    this.aRouter.params.subscribe((parms) => {
      let pi = parms["productId"];
      let availableProduct = new ProductData();
      this.productD = availableProduct.data.filter((res) => {
        if (res.id == pi) {
          return res;
        }
      })[0];
      this.selectedColor = this.productD.color[0];
      this.selectedQuantity = 1;
      this.selectedSize = this.productD.size[0];
    });
  }

  ngOnInit(): void {}

  addToCart() {
    let product: CartItem = {
      id: this.productD.id,
      price: this.productD.price,
      product_name: this.productD.product_name,
      color: this.selectedColor,
      quantity: this.selectedQuantity,
      size: this.selectedSize,
    };

    this.cartService.addToCart(product);
  }
}
