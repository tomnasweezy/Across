import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private loadingStatus$: BehaviorSubject<boolean>;

  constructor() {
    this.loadingStatus$ = new BehaviorSubject(false);
  }

  loadingOn() {
    this.loadingStatus$.next(true);
  }

  loadingOff() {
    this.loadingStatus$.next(false);
  }

  getLoadingStatus() {
    return this.loadingStatus$;
  }
}
