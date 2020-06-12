import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ProductHomeComponent } from './components/product-home/product-home.component';

@NgModule({
  declarations: [HomeComponent, ProductHomeComponent],
  imports: [CommonModule, MDBBootstrapModule, HomeRoutingModule],
})
export class HomeModule {}
