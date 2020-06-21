import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
import { ProductDAOService } from "src/app/core/http/product-dao.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private productDAO: ProductDAOService) {
    this.productDAO.getAll().subscribe((res) => {
      this.products = res;
    });
  }

  ngOnInit(): void {}
}
