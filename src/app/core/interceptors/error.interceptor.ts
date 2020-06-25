import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ErrorDialogService } from "../services/errorhandle.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  unknownErrorMessage = "Unknown Error";
  unauthorizedMessage = "You are not Authorized";
  forbiddenMessage = "You are not Verified";
  notFoundMessage = "Object not found";
  internalErrorMessage = "Internal Server Error";
  jwtTokenExpireMessage = "Session has expired";

  constructor(private errorDialogService: ErrorDialogService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(err: HttpErrorResponse): Observable<HttpEvent<HttpErrorResponse>> {
    this.errorDialogService.openDialog(err);
    return throwError(err);
  }

  standardErrors(error: any): { error: any; dialog: boolean } {
    let dialog: boolean = true;
    if (error.status === 401) error.message = error.message ? error.message : this.unauthorizedMessage;
    else if (error.status === 403) error.message = error.message ? error.message : this.forbiddenMessage;
    else if (error.status === 404) error.message = error.message ? error.message : this.notFoundMessage;
    else if (error.status === 500) error.message = error.message ? error.message : this.internalErrorMessage;
    else if (error.status === 504) error.message = error.message ? error.message : this.jwtTokenExpireMessage;
    else {
      dialog = false;
    }
    return { error, dialog };
  }
}
