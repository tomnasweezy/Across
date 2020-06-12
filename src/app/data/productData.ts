import { Product } from "../shared/models/product.model";

export class ProductData {
  public data: Product[] = [
    {
      id: "1",
      images: ["assets/shirts/t1.jpg"],
      product_name: "MoonyCat",
      price: 200,
      quantity: 2,
      color: ["black", "white"],
      size: ["S", "M", "L"],
    },
    {
      id: "2",
      images: ["assets/shirts/t2.jpg"],
      product_name: "monster",
      price: 250,
      quantity: 1,
      color: ["white"],
      size: ["S", "M"],
    },
    {
      id: "3",
      images: ["assets/shirts/t3.jpg", "assets/shirts/t3-back.jpg"],
      product_name: "Cat",
      price: 100,
      quantity: 2,
      color: ["black"],
      size: ["S", "L"],
    },
  ];
}
