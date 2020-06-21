import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { GlobalDAOService } from "./global-dao.service";
import { ReceiptModel } from "src/app/shared/models/Receipt.model";

@Injectable({
  providedIn: "root",
})
export class CheckoutDAOService extends GlobalDAOService<ReceiptModel> {
  pageName: string = "checkout";

  constructor(protected _api: ApiService) {
    super(_api);
  }
}
