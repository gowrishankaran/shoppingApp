import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  private wishLists: any = [];
  constructor(private _productService: ProductsServiceService) {
    console.log('Constructor');
  }

  ngOnInit() {
    this.wishLists = this._productService.getWishLists();
    this.wishLists.map(function (value) {
      value.wishListTotalCount = 1;
      value.wishListTotalPrice = value.productPrice;
    });
  }

  increaseItems (product) {
    product.wishListTotalCount += 1;
    product.productPrice += product.wishListTotalPrice;
    // product.wishListTotalPrice += product.productPrice;
  }

  decreaseItems (product) {
    if (product.wishListTotalCount > 1) {
      product.wishListTotalCount -= 1;
      product.productPrice -= product.wishListTotalPrice;
      // product.wishListTotalPrice -= product.productPrice;
    }
  }

  deleteItem (index) {
    console.log(index);
    this.wishLists.splice(index, 1);
  }

}
