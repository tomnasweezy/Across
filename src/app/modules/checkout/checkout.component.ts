import { Component, OnInit, ViewChild } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";
import { CartService } from "src/app/core/services/cart.service";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  @ViewChild("stepper") stepper;
  step = 0;
  typesOfpayment: string[] = ["cash on delivery", "Credit Card"];
  isLinear = false;
  isEditable = true;
  panelOpenState = false;

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
  setStep(index: number) {
    this.step = index;
  }

  nextSteps() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  nextStep() {
    // let clear = true;
    // for (let [i, v] of Object.entries(this.shippingData)) {
    //   if (i !== "comment") {
    //     if (v == null || v == undefined || v.length == 0) {
    //       clear = false;
    //     }
    //   }
    // }
    // if (clear) {
    this.stepper.next();
    // }
    // console.log(this.shippingData);
  }
  edit() {
    this.stepper.previous();
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
