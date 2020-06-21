import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GlobalDAOService<Object> {
  pageName: string;

  constructor(protected _api: ApiService) {}

  getAll(): Observable<Object> {
    return this._api.getRequest<Object>(`${this.pageName}/getall/`);
  }

  getOneParam(id: string): Observable<Object> {
    return this._api.getRequest<Object>(`${this.pageName}/getone/${id}`);
  }
}
