import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatStepper } from "@angular/material/stepper";
import { TooltipPosition } from "@angular/material/tooltip";
import { Router } from "@angular/router";

import { CheckoutDAOService } from "src/app/core/http/checkout-dao.service";
import { CartService } from "src/app/core/services/cart.service";
import { CartItem } from "src/app/shared/models/cart.model";
import { ReceiptModel } from "src/app/shared/models/Receipt.model";

import { ThankyouDialogComponent } from "./components/thankyou-dialog/thankyou-dialog.component";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  @ViewChild("stepper") stepper: MatStepper;
  @ViewChild("shippingform") shippingForm: ElementRef;
  sum: any = 0;
  currentQuantity = [];
  step = 0;
  positionOptions: TooltipPosition[] = ["below"];
  typesOfpayment: string[] = ["cash on delivery", "Credit Card"];
  cities: string[] = ["Cairo", "Giza", "6-october", "Madinaty", "El Sherouk", "Obour", "El sheiekZayed"];
  isLinear = false;
  isEditable = true;
  panelOpenState = false;
  shippingData: FormGroup;
  realData: CartItem[] = [];
  isSmallScreen: any;
  innerWidth: number;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router,
    private checkoutDAO: CheckoutDAOService,
    public dialog: MatDialog
  ) {
    this.cartService.getCartItemsObs().subscribe((res) => {
      this.realData = res;
      this.getSum();
    });
    this.innerWidth = window.innerWidth;
    // this.isSmallScreen = breakpointObserver.isMatched("(max-width: 1200px)");
  }

  ngOnInit(): void {
    this.shippingData = this.fb.group({
      fullName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phonenumber: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      street_addr: new FormControl("", [Validators.required]),
      building_no: new FormControl("", [Validators.required]),
      floor_no: new FormControl("", [Validators.required]),
      flat_no: new FormControl("", [Validators.required]),
      addr_landmark: new FormControl(""),
      comment: [""],
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log("oko", this.innerWidth);
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
    return this.sum + 20;
  }

  buyNow() {
    let receipt: ReceiptModel = {
      cart: this.realData,
      userInfo: this.shippingData.value,
      paymentType: "COD",
    };
    // console.log("buy now button");
    this.checkoutDAO.create(receipt).subscribe((res) => {
      console.log("receipt", res);
    });
    this.dialog
      .open(ThankyouDialogComponent)
      .afterClosed()
      .subscribe((res) => {
        this.cartService.clearCart();
        this.router.navigateByUrl(`home`);
      });
  }

  public errorHandling(control: string, error: string) {
    return this.shippingData.controls[control].hasError(error);
  }
}
