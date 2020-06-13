import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";
import { CartService } from "src/app/core/services/cart.service";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  isLinear = true;
  isEditable = false;

  shippingData = {
    fullname: null,
    email: null,
    phonenumber: null,
    streetaddress: null,
    landmarkaddress: null,
    buildingnumber: null,
    floornumber: null,
    flatnumber: null,
    comment: null,
  };
  realData: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.getCartItemsObs().subscribe((res) => {
      this.realData = res;
    });
  }

  ngOnInit(): void {}
  nextStep() {
    console.log(this.shippingData);
  }
  updateQuantity(item: CartItem) {
    for (let current of this.realData) {
      if (current.product_item.id === item.product_item.id && current.sub_id == item.sub_id) {
        current = item;
      }
    }
    console.log(this.realData);
  }
  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }
}
