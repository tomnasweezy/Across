import { ProductSQC } from "./productSQC.model";

export class Product {
  id: string;
  images: string[];
  product_name: string;
  price: number;
  sqc: ProductSQC[];
}
