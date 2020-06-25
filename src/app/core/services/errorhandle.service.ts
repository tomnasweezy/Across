import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from "src/app/shared/components/error-dialog/error-dialog.component";

@Injectable({
  providedIn: "root",
})
export class ErrorDialogService {
  public isDialogOpen: Boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog(data: any): any {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
      const dialogRef = this.dialog.open(ErrorDialogComponent, { data });

      dialogRef.afterClosed().subscribe((result) => {
        this.isDialogOpen = false;
      });
    }
  }
}
