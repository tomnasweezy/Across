import { Component, OnInit } from "@angular/core";
import { ContactUsDAOService } from "src/app/core/http/contactus-dao.service";
import { contactUsModel } from "src/app/shared/models/contactus.model";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { FeedbackthankyouComponent } from "./components/feedbackthankyou/feedbackthankyou.component";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.scss"],
})
export class ContactusComponent implements OnInit {
  ContactusData: FormGroup;
  // Contactus: contactUsModel = {
  //   Fullname: null,
  //   email: null,
  //   message: null,
  // };

  constructor(private fb: FormBuilder, private contactUsDAO: ContactUsDAOService, public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.ContactusData = this.fb.group({
      Fullname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required]),
    });
  }

  messagesend() {
    console.log(this.ContactusData.status);
    if (this.ContactusData.status == "VALID") {
      this.contactUsDAO.create(this.ContactusData.value).subscribe((res) => {
        console.log("Contactus", res);
        this.dialog
          .open(FeedbackthankyouComponent)
          .afterClosed()
          .subscribe((res) => {
            this.router.navigateByUrl(`home`);
          });
      });
    }
  }

  public errorHandling(control: string, error: string) {
    return this.ContactusData.controls[control].hasError(error);
  }
}
