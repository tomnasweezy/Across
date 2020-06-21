import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GlobalDAOService<T> {
  pageName: string;

  constructor(protected _api: ApiService) {}

  getAll(): Observable<T[]> {
    return this._api.getRequest<T[]>(`${this.pageName}/getall/`);
  }

  getOneParam(id: string): Observable<T> {
    return this._api.getRequest<T>(`${this.pageName}/getone/${id}`);
  }
}
