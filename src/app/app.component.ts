import { Component } from "@angular/core";
import { LoadingService } from "./core/services/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "across";
  loadingStatus: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.getLoadingStatus().subscribe((res) => {
      this.loadingStatus = res;
    });
  }
}
