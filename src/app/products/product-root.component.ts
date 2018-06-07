import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-root',
  templateUrl: './product-root.component.html',
  styleUrls: ['./product-root.component.css']
})
export class ProductRootComponent implements OnInit {

  isWishActive: Boolean = false;
  isMyCartActive: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  notyActions (type) {
    if (type === 'wishList') {
      this.isWishActive = !this.isWishActive;
      this.isMyCartActive = false;
    } else if (type === 'myCart') {
      this.isWishActive = false;
      this.isMyCartActive = !this.isMyCartActive;
    }
  }

}
