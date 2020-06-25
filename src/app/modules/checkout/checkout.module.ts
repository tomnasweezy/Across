import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CheckoutComponent } from "./checkout.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { ProductCardComponent } from "./components/product-card/cart-card.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { ThankyouDialogComponent } from "./components/thankyou-dialog/thankyou-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [CheckoutComponent, ProductCardComponent, ThankyouDialogComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
  ],
})
export class CheckoutModule {}
