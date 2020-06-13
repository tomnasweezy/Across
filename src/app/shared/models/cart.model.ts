import { Product } from "./product.model";

export class CartItem {
  id?: string = "1";
  product_item: Product;
  sub_id: string;
  size: string;
  quantity: number;
  color: string;
}
