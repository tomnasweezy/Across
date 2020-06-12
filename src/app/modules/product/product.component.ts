import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Product } from "src/app/shared/models/product.model";
import { ActivatedRoute } from "@angular/router";
import { ProductData } from "src/app/data/productData";
import { AvailableProduct } from "src/app/shared/models/availableProducts.model";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  productD: AvailableProduct;
  selectedColor: string = "black";
  selectedQuantity: number = 1;
  selectedSize: string;

  constructor(private cookieService: CookieService, private aRouter: ActivatedRoute) {
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
    let product: Product = {
      id: this.productD.id,
      price: this.productD.price,
      product_name: this.productD.product_name,
      color: this.selectedColor,
      quantity: this.selectedQuantity,
      size: this.selectedSize,
    };
    if (localStorage.getItem("product")) {
      let currentProducts: Product[] = JSON.parse(localStorage.getItem("product"));
      currentProducts.push(product);
      localStorage.setItem("product", JSON.stringify(currentProducts));
    } else {
      let allProducts = [];
      allProducts.push(product);
      localStorage.setItem("product", JSON.stringify(allProducts));
    }
  }
}
