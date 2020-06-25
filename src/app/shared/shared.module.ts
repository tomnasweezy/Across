import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, ErrorDialogComponent],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent],
})
export class SharedModule {}
