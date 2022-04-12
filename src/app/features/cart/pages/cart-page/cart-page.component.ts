import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../product/services/products.service';
import { CartsService } from '../../services/carts.service';
import { Product } from '../../../product/model/product';
import { Cart } from '../../model/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  products: Product[] = [];
  cart?: Cart | null;


  constructor( private poductsService: ProductsService,
               private cartsService: CartsService  ) { }

  async ngOnInit() {
    this.products = await this.poductsService.getAll();
    await this.load();
  }

  getProductIndex( id: string ) {
   return this.products.findIndex( p => p.id === id);
  }

  getProductName( id: string ) {
    const product = this.products.find( p => p.id === id);
    if (!product) '';
    return `${product?.title} - ${product?.code}`
  }

  async deleteCart() {
    await this.cartsService.delete(this.cart!.id);
    this.cart = null;
  }

  async deleteCartProduct(pid: string) {
    await this.cartsService.deleteProduct(this.cart!.id, pid);
    await this.load();
  }

  async addToCart( product: Product ) {
    if (!this.cart)
     {
        const id = await this.cartsService.create();
        this.cart = { id, products: [] };
     }
     await this.cartsService.addNewProduct(this.cart.id, product);
     await this.load();
  }


  private async load() {
    const carts = await this.cartsService.getAll();
    if (carts?.length > 0) {
      this.cart = carts[0];
    }
  }
}

