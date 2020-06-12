import { Component, OnInit, Input } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";
import { AvailableProduct } from "src/app/shared/models/availableProducts.model";
import { Product } from "src/app/shared/models/product.model";
@Component({
  selector: "app-product-home",
  templateUrl: "./product-home.component.html",
  styleUrls: ["./product-home.component.scss"],
})
export class ProductHomeComponent implements OnInit {
  @Input("prodInfo") data: AvailableProduct;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProduct(event: MouseEvent) {
    console.log(event.target);
    this.router.navigateByUrl(`product/${this.data.id}`);
  }
}
