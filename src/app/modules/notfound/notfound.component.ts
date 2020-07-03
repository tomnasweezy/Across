import { Component, OnInit } from "@angular/core";
import { LoadingService } from "src/app/core/services/loading.service";

@Component({
  selector: "app-notfound",
  templateUrl: "./notfound.component.html",
  styleUrls: ["./notfound.component.scss"],
})
export class NotfoundComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loadingOff();
  }
}
