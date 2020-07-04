import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";

import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from "ngx-gallery-9";
import { ProductDAOService } from "src/app/core/http/product-dao.service";
import { CartService } from "src/app/core/services/cart.service";
import { LoadingService } from "src/app/core/services/loading.service";
import { CartItem } from "src/app/shared/models/cart.model";
import { Product } from "src/app/shared/models/product.model";
import { environment } from "src/environments/environment";
import { v4 } from "uuid";

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
  numberofclick: number = 0;
  selectedQuantity: number = 1;
  selectedSize: string;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  imgUrlPrefix: string = `${environment.mediaUrl}:${environment.port}`;
  constructor(
    private _snackBar: MatSnackBar,
    private aRouter: ActivatedRoute,
    private cartService: CartService,
    private productDAO: ProductDAOService,
    private location: Location,
    private loadingService: LoadingService
  ) {
    this.loadingService.loadingOn();
    this.aRouter.params.subscribe((parms) => {
      let pi = parms["productId"];
      this.productDAO.getOne(pi).subscribe(
        (res) => {
          this.product = res;
          let g = [];
          for (let image of this.product.images) {
            let p = {
              big: `${this.imgUrlPrefix}/${image}`,
              medium: `${this.imgUrlPrefix}/${image}`,
              small: `${this.imgUrlPrefix}/${image}`,
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
          this.loadingService.loadingOff();
        },
        (error) => {
          console.log(error);
        }
      );
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
      {
        breakpoint: 828,
        width: "100%",
        height: "500px",
        thumbnailsSwipe: true,
        imageSwipe: true,
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
        return "#000";
      case "W":
        return "#fff";
      case "R":
        return "red";
      case "Y":
        return "#e9c70a";
    }
  }

  addToCart() {
    let cartItem: CartItem = {
      id: v4(),
      product_item: this.product,
      sub_id: `${this.selectedSize}.${this.selectedColor}`,
      color: this.selectedColor,
      quantity: this.selectedQuantity,
      size: this.selectedSize,
    };

    console.log(cartItem);

    this.cartService.addToCart(cartItem);

    if (this.numberofclick == 0) {
      this._snackBar.open("Please check your cart for the added item", "", {
        duration: 2000,
        panelClass: ["snackbarstyle"],
        horizontalPosition: "right",
        verticalPosition: "bottom",
      });
      console.log("the first click");
      this.numberofclick++;
    }
  }
}
