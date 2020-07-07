import { Injectable } from "@angular/core";

import { Product } from "src/app/shared/models/product.model";

import { ApiService } from "./api.service";
import { GlobalDAOService } from "./global-dao.service";

@Injectable({
  providedIn: "root",
})
export class ProductDAOService extends GlobalDAOService<Product> {
  pageName: string = "product";

  constructor(protected _api: ApiService) {
    super(_api);
  }
}
