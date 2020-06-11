import { Product } from "../shared/models/product.model";
import { AvailableProduct } from "../shared/models/availableProducts.model";

export class ProductData {
  public data: AvailableProduct[] = [
    {
      id: "1",
      product_name: "MoonyCat",
      price: 200,
      quantity: 2,
      color: ["black", "white"],
      size: ["S", "M", "L"],
    },
    {
      id: "2",
      product_name: "monster",
      price: 250,
      quantity: 1,
      color: ["white"],
      size: ["S", "M"],
    },
    {
      id: "3",
      product_name: "Cat",
      price: 100,
      quantity: 2,
      color: ["black"],
      size: ["S", "L"],
    },
  ];
}
