import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.scss"],
})
export class ContactusComponent implements OnInit {
  Contactus = {
    Fullname: null,
    email: null,
    message: null,
  };
  constructor() {}

  ngOnInit(): void {}

  messagesend() {
    console.log("okok", this.Contactus);
  }
}
