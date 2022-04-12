import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  url = `${ environment.api }/api/products`;

  constructor( private httpClient: HttpClient ) {  }

  getAll(): Promise<Product[]>{
    const resp =  this.httpClient.get<Product[]>(this.url);
    return lastValueFrom(resp);
  }

  async get(pid: string): Promise<Product>{
    const resp =  this.httpClient.get<Product>(`${this.url}/${pid}`);
    return lastValueFrom(resp);
  }

  async delete(pid: string): Promise<boolean>{
    const resp =  this.httpClient.delete(`${this.url}/${pid}`);
    await lastValueFrom(resp);
    return true;
  } 

  async create(product: Product): Promise<string>{
    const resp =  this.httpClient.post<string>(this.url, product);
    return lastValueFrom(resp);
  }

  async update(product: Product): Promise<Product>{
    const resp =  this.httpClient.put<Product>(`${this.url}/${product.id}`, product);
    return lastValueFrom(resp);
  }

}
