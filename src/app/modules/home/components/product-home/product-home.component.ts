import { Component, OnInit, Input } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";
import { Product } from "src/app/shared/models/product.model";
import { CartItem } from "src/app/shared/models/cart.model";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-product-home",
  templateUrl: "./product-home.component.html",
  styleUrls: ["./product-home.component.scss"],
})
export class ProductHomeComponent implements OnInit {
  @Input("prodInfo") data: Product;
  imgUrlPrefix: string = `${environment.mediaUrl}:${environment.port}/`;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProduct(event: MouseEvent) {
    console.log(event.target);
    this.router.navigateByUrl(`product/${this.data.id}`);
  }
}
