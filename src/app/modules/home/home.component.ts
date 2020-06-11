import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToProduct(event: MouseEvent) {
    console.log(event.target);
    this.router.navigateByUrl("product/123");
  }
}
