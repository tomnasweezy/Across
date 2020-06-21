import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Product } from "src/app/shared/models/product.model";
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
