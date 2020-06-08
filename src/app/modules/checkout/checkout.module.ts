import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CheckoutComponent } from "./checkout.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [CheckoutComponent, ProductCardComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
})
export class CheckoutModule {}
