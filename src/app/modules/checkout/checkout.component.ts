import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
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
  realData: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(localStorage.getItem("product"));
    let product = JSON.parse(localStorage.getItem("product"));
    this.realData = product;
  }
  nextStep() {
    console.log(this.shippingData);
  }
  updateQuantity(item: Product) {
    for (let current of this.realData) {
      if (current.product_name === item.product_name) {
        current = item;
      }
    }
    console.log(this.realData);
  }
  removeItem(item: Product) {
    let newItems = this.realData.filter((res) => {
      if (res.product_name !== item.product_name) {
        return res;
      }
    });
    this.realData = newItems;
  }
}
