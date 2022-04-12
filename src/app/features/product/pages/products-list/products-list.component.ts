import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor( private productsService: ProductsService,
               private sessionService: SessionService ) { }


  get isAdmin() { return this.sessionService.isAdmin(); }

  async ngOnInit() {
    this.products = await this.productsService.getAll(); 
  }

  async delete(product: Product) {
    await this.productsService.delete(product.id);
    this.products = await this.productsService.getAll(); 
  }

}
