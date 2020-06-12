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
  selectedColor: string = "black";
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
        this.selectedColor = this.product.color[0];
        this.selectedQuantity = 1;
        this.selectedSize = this.product.size[0];
        let g = [];
        for (let image of this.product.images) {
          let p = {
            big: image,
            medium: image,
            small: image,
          };
          g.push(p);
        }
        console.log(g);
        this.galleryImages = g;
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

  addToCart() {
    let product: CartItem = {
      id: this.product.id,
      price: this.product.price,
      product_name: this.product.product_name,
      color: this.selectedColor,
      quantity: this.selectedQuantity,
      size: this.selectedSize,
    };

    this.cartService.addToCart(product);
  }
}
