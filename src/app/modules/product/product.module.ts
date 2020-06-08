import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule],
})
export class ProductModule {}
