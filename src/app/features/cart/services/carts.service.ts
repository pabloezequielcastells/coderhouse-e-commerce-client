import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../model/cart';
import { CartProduct } from '../model/cart-product';
import { Product } from '../../product/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  url = `${ environment.api }/api/carts`;

  constructor( private httpClient: HttpClient ) {  }

  getAll(): Promise<Cart[]>{
    const resp =  this.httpClient.get<Cart[]>(`${this.url}`);
    return lastValueFrom(resp);
  }

  getCartProducts(cid: string): Promise<CartProduct[]>{
    const resp =  this.httpClient.get<CartProduct[]>(`${this.url}/${cid}`);
    return lastValueFrom(resp);
  }
  
  async create(): Promise<string>{
    const resp =  this.httpClient.post<string>(this.url, {});
    return lastValueFrom(resp);
  }

  async addNewProduct(cid:string,  product: Product ): Promise<boolean>{
    const resp =  this.httpClient.post<boolean>(`${this.url}/${cid}/products`, product);
    return lastValueFrom(resp);
  }

  async deleteProduct(cid:string, pid: string): Promise<boolean>{
    const resp =  this.httpClient.delete(`${this.url}/${cid}/products/${pid}`);
    await lastValueFrom(resp);
    return true;
  }

  async delete(cid:string): Promise<boolean>{
    const resp =  this.httpClient.delete(`${this.url}/${cid}`);
    await lastValueFrom(resp);
    return true;
  }

}
