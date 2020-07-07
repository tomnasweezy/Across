import { Injectable } from "@angular/core";

import { ReceiptModel } from "src/app/shared/models/Receipt.model";

import { ApiService } from "./api.service";
import { GlobalDAOService } from "./global-dao.service";

@Injectable({
  providedIn: "root",
})
export class CheckoutDAOService extends GlobalDAOService<ReceiptModel> {
  pageName: string = "checkout";

  constructor(protected _api: ApiService) {
    super(_api);
  }
}
