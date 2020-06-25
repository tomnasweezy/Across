import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { ErrorDialogComponent } from "./components/error-dialog/error-dialog.component";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";
@NgModule({
  declarations: [LoadingSpinnerComponent, ErrorDialogComponent],
  entryComponents: [ErrorDialogComponent],
  imports: [CommonModule, MatDialogModule],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
  exports: [LoadingSpinnerComponent, ErrorDialogComponent],
})
export class SharedModule {}
