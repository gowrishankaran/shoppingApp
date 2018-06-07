import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Gowri'},
    {value: 'pizza-1', viewValue: 'Ashwath'},
    {value: 'tacos-2', viewValue: 'Prabha'}
  ];

  private productLists: any = [];

  constructor(private _productService: ProductsServiceService) { }

  ngOnInit() {
    this.productLists = [
      { 'productId': 100, 'productName': 'Asus0', 'productPrice' : 45000 },
      { 'productId': 101, 'productName': 'Asus1', 'productPrice' : 45000 },
      { 'productId': 102, 'productName': 'Asus2', 'productPrice' : 45000 },
      { 'productId': 103, 'productName': 'Asus3', 'productPrice' : 45000 },
      { 'productId': 104, 'productName': 'Asus4', 'productPrice' : 45000 },
      { 'productId': 105, 'productName': 'Asus5', 'productPrice' : 45000 }
    ];
  }

  isWishList (currentProduct) {
    console.log('Wish List');
    this._productService.setWishList(currentProduct);
    console.log(this._productService.getWishLists());
  }

}
