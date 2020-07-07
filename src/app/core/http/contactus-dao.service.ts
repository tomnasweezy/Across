import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

import { GlobalDAOService } from "./global-dao.service";
import { contactUsModel } from "src/app/shared/models/contactus.model";

@Injectable({
  providedIn: "root",
})
export class ContactUsDAOService extends GlobalDAOService<contactUsModel> {
  pageName: string = "contactus";

  constructor(protected _api: ApiService) {
    super(_api);
  }
}
