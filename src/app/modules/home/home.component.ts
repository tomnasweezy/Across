import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";
import { AvailableProduct } from "src/app/shared/models/availableProducts.model";
import { ProductData } from "src/app/data/productData";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: AvailableProduct[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    let prd = new ProductData();
    this.products = prd.data;
  }
}
