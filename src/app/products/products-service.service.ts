import { Injectable } from '@angular/core';

@Injectable()
export class ProductsServiceService {

  private wishLists: any = [];
  private myCartLists: any = [];

  constructor() {
  }

  getWishLists() {
    return this.wishLists;
  }

  setWishList(product) {
    const found = this.isNewWishProduct(product.productId);
    if (!found || this.wishLists.length === 0) {
      this.wishLists.unshift(product);
    }
    console.log(this.getWishLists());
  }

  isNewWishProduct (productId) {
     if (this.wishLists.length === 0) {
        return true;
     } else {
        return this.wishLists.some(function(value) {
          return value.productId === productId;
        });
     }
  }

}
