import { Component, OnInit, ViewChild, Input, Output, ElementRef } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";
import { CartService } from "src/app/core/services/cart.service";
import { Product } from "src/app/shared/models/product.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  @ViewChild("stepper") stepper;
  @ViewChild("shippingform") shippingForm: ElementRef;
  sum: any = 0;
  currentQuantity = [];
  step = 0;
  typesOfpayment: string[] = ["cash on delivery", "Credit Card"];
  isLinear = false;
  isEditable = true;
  panelOpenState = false;
  shippingData: FormGroup;
  realData: CartItem[] = [];

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.cartService.getCartItemsObs().subscribe((res) => {
      this.realData = res;
      this.getSum();
    });
  }

  ngOnInit(): void {
    this.shippingData = this.fb.group({
      fullname: ["", Validators.required],
      email: ["", Validators.required],
      phonenumber: ["", Validators.required],
      streetaddress: ["", Validators.required],
      building_no: ["", Validators.required],
      floor_no: ["", Validators.required],
      flat_no: ["", Validators.required],
      address_land: [""],
      comment: [""],
    });
  }
  setStep(index: number) {
    this.step = index;
  }

  nextSteps() {
    if (this.shippingData.status == "VALID") {
      this.step++;
    }
  }

  prevStep() {
    this.step--;
  }
  nextStep() {
    if (this.shippingData.status == "VALID") {
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

  public errorHandling(control: string, error: string) {
    return this.shippingData.controls[control].hasError(error);
  }
}
