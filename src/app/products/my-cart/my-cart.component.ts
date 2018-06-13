import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {



  private myCartLists: any = [];
  @Output() close = new EventEmitter();
  constructor(private _productService: ProductsServiceService) {
    console.log('Constructor');
  }

  ngOnInit() {
    this.myCartLists = this._productService.getMyCartLists();
    this.myCartLists.map(function (value) {
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
    this.myCartLists.splice(index, 1);
  }

  closeCartList() {
    this.close.emit(null);
  }

}
