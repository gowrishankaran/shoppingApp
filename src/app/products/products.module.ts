import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSelectModule
  , MatOptionModule, MatFormFieldModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { WishListComponent } from './wish-list/wish-list.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductRootComponent } from './product-root.component';
import { ProductsServiceService } from './products-service.service';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    // BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule, MatSelectModule, MatOptionModule, MatFormFieldModule
  ],
  declarations: [ProductListComponent, WishListComponent, MyCartComponent, ProductRootComponent],
  providers: [ ProductsServiceService ]
})
export class ProductsModule { }
