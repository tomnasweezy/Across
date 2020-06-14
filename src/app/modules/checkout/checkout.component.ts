import { Component, OnInit, ViewChild, Input, Output } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";
import { CartService } from "src/app/core/services/cart.service";
import { Product } from "src/app/shared/models/product.model";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  @ViewChild("stepper") stepper;
  sum: any = 0;
  currentQuantity = [];
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
  shippingDataError = {
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
      this.getSum();
    });
  }

  ngOnInit(): void {
    // console.log("okok", this.data);
    // console.log(this.product);
  }
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
    let clear = true;
    for (let [i, v] of Object.entries(this.shippingData)) {
      if (i !== "comment") {
        if (v == null || v == undefined || v.length == 0) {
          // console.log(v);
          this.shippingDataError[i] = "mat-form-field-invalid ng-invalid mat-form-field-hide-placeholder";
          // console.log(this.shippingDataError);
          clear = false;
        }
      }
    }
    if (clear) {
      this.stepper.next();
    }
  }
  edit() {
    this.stepper.previous();
  }
  updateQuantity(item: CartItem) {
    for (let [index, current] of this.realData.entries()) {
      if (current.id === item.id) {
        this.realData[index] = item;
      }
    }
    this.getSum();
  }
  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  getSum() {
    let sum = 0;
    for (let item of this.realData) {
      sum += item.quantity * item.product_item.price;
    }
    this.sum = sum;
    console.log(this.sum);
  }
  getTotal() {
    return this.sum + 45;
  }
}
