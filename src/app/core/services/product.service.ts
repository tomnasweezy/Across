import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { Product } from "src/app/shared/models/product.model";
import { ProductData } from "src/app/data/productData";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products$: BehaviorSubject<Product[]>;
  private products: Product[];

  constructor() {
    let productsSaved = this.getAllProducts();
    this.products$ = new BehaviorSubject(productsSaved);
    this.products = productsSaved;
  }

  getAllProducts() {
    let pDataClass = new ProductData();
    let productData: Product[] = pDataClass.data;
    return productData;
  }

  getOneProduct(id: string) {
    let oneProduct = this.products.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });
    return oneProduct;
  }

  getAllProductsObs() {
    return this.products$;
  }
}
