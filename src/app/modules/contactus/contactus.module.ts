import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContactusRoutingModule } from "./contactus-routing.module";
import { ContactusComponent } from "./contactus.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { FeedbackthankyouComponent } from "./components/feedbackthankyou/feedbackthankyou.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [ContactusComponent, FeedbackthankyouComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    ContactusRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class ContactusModule {}
