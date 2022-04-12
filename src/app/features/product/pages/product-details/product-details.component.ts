import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  form: FormGroup;
  private id?: string;
  private sub: any;

  constructor( private productsService: ProductsService,
               private route: ActivatedRoute ) { 
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      code: new FormControl(),
      thumbnail: new FormControl(),
      price: new FormControl(),
      stock: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( async (params) =>{
      this.id = params['id'];
      if (this.id) {
        const product  = await this.productsService.get(this.id);
        this.form.patchValue({
          id: product.id,
          title: product.title,
          description: product.description,
          code: product.code,
          thumbnail: product.thumbnail,
          price: product.price,
          stock: product.stock,
        });
      }
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async save() {
    if (this.id) {
      await this.productsService.update(this.form.value);
    } else {
      await this.productsService.create(this.form.value);
    }
    history.back();
  }


  cancel() {
    history.back();
  }

}
