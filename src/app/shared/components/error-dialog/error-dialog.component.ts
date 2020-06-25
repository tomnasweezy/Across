import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-error-dialog",
  templateUrl: "./error-dialog.component.html",
  styleUrls: ["./error-dialog.component.scss"],
})
export class ErrorDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialogRef: MatDialogRef<ErrorDialogComponent>) {
    setTimeout(() => {
      this.router.navigateByUrl("/home");
      this.dialogRef.close();
    }, 2000);
  }
  ngOnInit(): void {}
}
