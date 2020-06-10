import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { nullSafeIsEquivalent } from "@angular/compiler/src/output/output_ast";
import { Product } from "src/app/shared/models/product.model";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  numbers: any[];
  shippingData = {
    fullname: null,
    email: null,
    phonenumber: null,
    streetaddress: null,
  };

  sampleData = [
    {
      product_name: "MoonyCat",
      price: 200,
      quantity: 2,
      color: "black",
    },
    {
      product_name: "monster",
      price: 250,
      quantity: 1,
      color: "white",
    },
    {
      product_name: "Cat",
      price: 100,
      quantity: 2,
      color: "black",
    },
  ];

  constructor() {
    this.numbers = new Array(3);
  }

  ngOnInit(): void {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ["", Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ["", Validators.required],
    // });
    // console.log(this.secondFormGroup);
  }
  nextStep() {
    console.log(this.shippingData);
  }
  updateQuantity(item: Product) {
    for (let current of this.sampleData) {
      if (current.product_name === item.product_name) {
        current = item;
      }
    }
    console.log(this.sampleData);
  }
  removeItem(item: Product) {
    let newItems = this.sampleData.filter((res) => {
      if (res.product_name !== item.product_name) {
        return res;
      }
    });
    this.sampleData = newItems;
  }
}
