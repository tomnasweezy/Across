import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { NgxImageZoomModule } from "ngx-image-zoom";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NgxGalleryModule } from "ngx-gallery-9";
@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    NgxGalleryModule,
  ],
})
export class ProductModule {}
