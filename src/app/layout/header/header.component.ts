import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/core/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  itemsNo: number = 0;
  constructor(private cartService: CartService) {
    this.cartService.getCartItemsObs().subscribe((res) => {
      this.itemsNo = res.length;
    });
  }

  ngOnInit(): void {}
}
