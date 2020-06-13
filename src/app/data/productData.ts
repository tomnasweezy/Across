import { Product } from "../shared/models/product.model";

export class ProductData {
  public data: Product[] = [
    {
      id: "1",
      images: ["assets/shirts/t1.jpg"],
      product_name: "MoonyCat",
      price: 200,
      sqc: [
        {
          sub_id: "S.B",
          quantity: 1,
        },
        {
          sub_id: "S.W",
          quantity: 1,
        },
        {
          sub_id: "M.B",
          quantity: 1,
        },
        {
          sub_id: "M.W",
          quantity: 1,
        },
        {
          sub_id: "L.B",
          quantity: 1,
        },
        {
          sub_id: "L.W",
          quantity: 1,
        },
      ],
    },
    {
      id: "2",
      images: ["assets/shirts/t2.jpg"],
      product_name: "monster",
      price: 250,
      sqc: [
        {
          sub_id: "S.B",
          quantity: 1,
        },
        {
          sub_id: "S.W",
          quantity: 2,
        },
        {
          sub_id: "M.B",
          quantity: 3,
        },
        {
          sub_id: "M.W",
          quantity: 5,
        },
        {
          sub_id: "L.B",
          quantity: 1,
        },
        {
          sub_id: "L.W",
          quantity: 1,
        },
      ],
    },
    {
      id: "3",
      images: ["assets/shirts/t3.jpg", "assets/shirts/t3-back.jpg"],
      product_name: "Cat",
      price: 100,
      sqc: [
        {
          sub_id: "S.B",
          quantity: 5,
        },
        {
          sub_id: "S.W",
          quantity: 3,
        },
        {
          sub_id: "M.R",
          quantity: 1,
        },
        {
          sub_id: "M.Y",
          quantity: 1,
        },
        {
          sub_id: "L.B",
          quantity: 1,
        },
        {
          sub_id: "L.W",
          quantity: 1,
        },
      ],
    },
  ];
}
