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
  selectedProduct: any;
  constructor(private cookieService: CookieService, private aRouter: ActivatedRoute) {
    this.aRouter.params.subscribe((parms) => {
      let pi = parms["productId"];
      let availableProduct = new ProductData();
      this.productD = availableProduct.data.filter((res) => {
        if (res.id == pi) {
          return res;
        }
      })[0];
      console.log("okok", this.productD);
    });
  }

  ngOnInit(): void {
    this.selectedProduct["product_name"] = this.productD["product_name"];
    this.selectedProduct.id = this.productD.id;
    this.selectedProduct.price = this.productD.price;
    console.log("a7a", this.selectedProduct);
  }
  addToCart() {
    if (this.cookieService.get("product")) {
      let currentProducts: Product[] = JSON.parse(this.cookieService.get("product"));
      currentProducts.push(this.selectedProduct);
      this.cookieService.set("product", JSON.stringify(currentProducts));
    } else {
      let allProducts = [];
      allProducts.push(this.selectedProduct);
      this.cookieService.set("product", JSON.stringify(allProducts));
    }
  }
}
