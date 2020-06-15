import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ContactusRoutingModule } from "./contactus-routing.module";
import { ContactusComponent } from "./contactus.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ContactusComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, ReactiveFormsModule, MatInputModule, ContactusRoutingModule, MatFormFieldModule],
})
export class ContactusModule {}
