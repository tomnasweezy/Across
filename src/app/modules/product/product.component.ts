import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/shared/models/product.model";
import { CartService } from "src/app/core/services/cart.service";
import { ProductService } from "src/app/core/services/product.service";
import { Location } from "@angular/common";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from "ngx-gallery-9";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  product: Product;
  productSQCMap = new Map();
  sizeList: any[] = [];
  sizeMap = new Map<String, Array<any>>();
  colorList: any[] = [];
  maxQuantity: number = 0;
  selectedColor: string = "B";
  selectedColorHex: string = "#000";

  selectedQuantity: number = 1;
  selectedSize: string;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private aRouter: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private location: Location
  ) {
    this.aRouter.params.subscribe((parms) => {
      let pi = parms["productId"];
      let resProduct = this.productService.getOneProduct(pi);
      if (resProduct.length > 0) {
        this.product = resProduct[0];
        let g = [];
        for (let image of this.product.images) {
          let p = {
            big: image,
            medium: image,
            small: image,
          };
          g.push(p);
        }
        this.galleryImages = g;

        let sqc = this.product.sqc;
        for (let [index, qualities] of sqc.entries()) {
          let [size, color] = qualities.sub_id.split(".");

          if (this.sizeMap.get(size)) {
            let e_color = this.sizeMap.get(size);
            e_color.push([color, this.translateColorToHex(color)]);
            this.sizeMap.set(size, e_color);
          } else {
            let colorHexMap = [];
            colorHexMap.push([color, this.translateColorToHex(color)]);
            this.sizeMap.set(size, colorHexMap);
          }
          this.productSQCMap.set(qualities.sub_id, qualities.quantity);

          if (index == 0) {
            this.selectedColor = color;
            this.selectedSize = size;
            this.selectedQuantity = 1;
            this.maxQuantity = qualities.quantity;
          }
        }
        this.colorList = this.sizeMap.get(this.selectedSize);
      } else {
        this.location.back();
      }
    });
  }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: "100%",
        height: "100%",
        thumbnailsColumns: 4,
        imageSwipe: true,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewZoom: true,
        previewZoomStep: 1,
      },
    ];
  }

  changeSelectedSize(size: string) {
    this.selectedSize = size;
    this.colorList = this.sizeMap.get(this.selectedSize);
    this.selectedColor = this.colorList[0][0];
    this.maxQuantity = this.productSQCMap.get(`${this.selectedSize}.${this.selectedColor}`);
    this.selectedQuantity = 1;
  }
  changeSelectedColor(color: string) {
    this.selectedColor = color;
    this.maxQuantity = this.productSQCMap.get(`${this.selectedSize}.${this.selectedColor}`);
    this.selectedQuantity = 1;
  }

  translateColorToHex(color: string) {
    switch (color) {
      case "B":
        return "#fff";
      case "W":
        return "#000";
      case "R":
        return "red";
      case "Y":
        return "#e9c70a";
    }
  }

  addToCart() {
    let cartItem: CartItem = {
      product_item: this.product,
      sub_id: `${this.selectedSize}.${this.selectedColor}`,
      color: this.selectedColor,
      quantity: this.selectedQuantity,
      size: this.selectedSize,
    };

    this.cartService.addToCart(cartItem);
  }
}
