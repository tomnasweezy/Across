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
    let today = new Date();
    let tomorrow = today.setDate(today.getDate() + 1);
    if (this.cookieService.get("product")) {
      let currentProducts: Product[] = JSON.parse(this.cookieService.get("product"));
      currentProducts.push(product);
      this.cookieService.set("product", JSON.stringify(currentProducts), tomorrow, "/");
    } else {
      let allProducts = [];
      allProducts.push(product);
      this.cookieService.set("product", JSON.stringify(allProducts), tomorrow, "/");
    }
  }
}
