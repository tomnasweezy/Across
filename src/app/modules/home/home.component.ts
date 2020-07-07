import { Component, OnInit } from "@angular/core";

import { ProductDAOService } from "src/app/core/http/product-dao.service";
import { LoadingService } from "src/app/core/services/loading.service";
import { Product } from "src/app/shared/models/product.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private productDAO: ProductDAOService, private loadingService: LoadingService) {
    this.loadingService.loadingOn();
    this.productDAO.getAll().subscribe((res) => {
      this.products = res;
      this.loadingService.loadingOff();
    });
  }

  ngOnInit(): void {}
}
