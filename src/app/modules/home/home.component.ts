import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/shared/models/product.model";
import { ProductData } from "src/app/data/productData";
import { ProductService } from "src/app/core/services/product.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
    this.productService.getAllProductsObs().subscribe((res) => {
      this.products = res;
    });
  }

  ngOnInit(): void {}
}
